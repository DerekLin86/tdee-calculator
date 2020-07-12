import { Observable } from 'rxjs';

export namespace SaleForceAPI {
  export interface ApiStatus {
    statusCode: number;
    status: boolean;
    code: string;
    message: string;
    method?: string;
  }

  export interface CallConfiguration {
    buffer: boolean;
    escape: boolean;
    timeout: number;
  }
}

export class ApiObservableBuilder<T> {
  constructor() {}

  observer: any;

  private handleResponse(resp: T, status: SaleForceAPI.ApiStatus) {

    if (!(status.statusCode >= 200 && status.statusCode <= 302)) {
        this.observer.error('Error response from api: ' + status.statusCode + ' ' + JSON.stringify(status));
    } else {
        let result: any = resp;
        if (typeof result === 'string') {
          try {
            //Server response may be well defined but the wrapper may not automatically
            //json parse all response types.
            result = JSON.parse(result);
          } catch (e) {

          }
        }
        this.observer.next(result);
        this.observer.complete();
    }
  }

  public getResponseHandler(): (resp: T, status: SaleForceAPI.ApiStatus) => void {
    return this.handleResponse.bind(this);
  }

  public build(apiCall: () => void): Observable<T> {
    let builder = this;
    let observable : Observable<T> = Observable.create((observer) => {
      builder.observer = observer;

      apiCall();
    });
    return observable;
  }
}
