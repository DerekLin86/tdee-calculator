import { Directive, ElementRef, HostListener, OnInit, NgZone, Input, Inject, ApplicationRef } from '@angular/core';
import * as $ from 'jquery';
import { DOCUMENT } from '@angular/common';


@Directive({
  selector: '[appScrollMove]'
})
export class ScrollMoveDirective implements OnInit {

  private setting = {
    chrome: {
      urlbar: {
        marginTop: 24,
        height: 80
      }
    }
  };
  private _appElementRef: ElementRef;

  get windowHeight() {
    return window.outerHeight > 0 ? window.outerHeight : window.innerHeight;
  }
  @Input()
  scrollToPageNumber = 0;

  @HostListener('click', ['$event']) onClick() {

    this.ngZone.runOutsideAngular(() => {
      let scrollPositionY = this.scrollToPageNumber > 0 ? this.windowHeight * (this.scrollToPageNumber - 1) : 0;

      this.move({
        y: scrollPositionY
      });
    });
  }

  constructor(
    private ngZone: NgZone,
    @Inject(DOCUMENT) private document: HTMLDocument,
    private applicationRef: ApplicationRef
  ) {
  }

  ngOnInit(): void { }

  moveToElement(param: {
    elementRef: ElementRef,
    offset?: number,
  }) {
    if (!param.elementRef) {
      return;
    }

    const elem = this.tryToGetHtmlElement({ elementRef : param.elementRef });
    const offsetTopOfDocument = this.getOffSetRelativeToDocument({
      elem,
      position: 'Top'
    });

    this.move({
      y: offsetTopOfDocument
    });

    // if (this.browserService.isMobile && this.browserService.isAndroid) {
    //   /*
    //    * 2019/12/30 :
    //       - only Android can support scrollIntoView with smooth behavior

    //       @example
    //         elem.scrollIntoView({
    //           behavior: 'smooth',
    //           block: 'start'
    //         });
    //   */

    //   this.scrollIntoView({
    //     ...param,
    //   });
    // } else {
    //   const elem = this.tryToGetHtmlElement({ elementRef : param.elementRef });
    //   const offsetTopOfDocument = this.getOffSetRelativeToDocument({
    //     elem: elem,
    //     position: 'Top'
    //   });
    //   const scrollPositionY = offsetTopOfDocument - this.caculateOffsetWithHeader(param);
    //   this.move({
    //     y: scrollPositionY
    //   });
    // }
  }

  public move(param: {
    y: number
  }) {
    $(document).ready(() => {
      $('body,html').stop().animate({ scrollTop: param.y }, 600, () => {});
    });
  }

  public scrollIntoView(param: {
    elementRef: ElementRef,
    offset?: number,
  }) {
    if (!param.elementRef) {
      return;
    }
    const isSupportScrollIntoView = typeof document.documentElement.scrollIntoView === 'function';
    if (isSupportScrollIntoView) {
      const elem: HTMLElement = param.elementRef.nativeElement ?
        param.elementRef.nativeElement :
        param.elementRef;

      let resetStyle: () => void = null;

      const customizeOffset = this.caculateOffsetWithHeader(param);
      if (customizeOffset) {
        const originalPosition = elem.style.position;
        const originalTop = elem.style.top;

        let newTop = customizeOffset;
        const hasOffset = (originalPosition === 'relative' && !!originalTop);
        if (hasOffset) {
          newTop -= Number.parseInt(originalTop);
        }

        elem.style.position = 'relative';
        elem.style.top = `${newTop * -1}px`;

        resetStyle = () => {
          elem.style.position = originalPosition;
          elem.style.top = originalTop;
        };
      }

      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      if (typeof resetStyle === 'function') {
        resetStyle();
      }
    } else {
      return {
        notSupport: true
      };
    }
  }

  // public moveToTop() {
  //   const scrollArg = {
  //     elementRef: this.appElementRef
  //   };

  //   this.moveToElement(scrollArg);
  // }

  public moveToTopWithoutUrlBar() {
    const startpointY = 0;
    let targetPositionY = startpointY;
    // if (this.isNeedFixTopPositionWithUrlBar()) {
    //   if (this.browserService.isChrome) {
    //     let correctBrowserHightWithoutUrlBar = (window.screen.height - window.innerHeight) - this.setting.chrome.urlbar.marginTop;
    //     targetPositionY = correctBrowserHightWithoutUrlBar;
    //   }
    // }

    // use setTimeout make sure pistionY has changed after all ui event excute
    setTimeout(() => {
      this.move({
        y: targetPositionY
      });
    }, 400);
  }

  private get appElementRef(): ElementRef {
    if (!this._appElementRef) {
      this._appElementRef = this.applicationRef.components[0].location;
    }
    return this._appElementRef;
  }

  private caculateOffsetWithHeader(param: {
    elementRef: ElementRef,
    offset?: number,
  }) {
    return param.offset || 0;
  }

  private tryToGetHtmlElement(arg: {
    elementRef: ElementRef | HTMLElement,
  }): HTMLElement {
    const nativeElement = (arg.elementRef as ElementRef).nativeElement;
    if (nativeElement) {
      return nativeElement;
    } else if (arg.elementRef instanceof HTMLElement) {
      return arg.elementRef;
    }
  }

  private getOffSetRelativeToDocument(arg: {
    elem: HTMLElement,
    position: 'Top' | 'Left'
  }) {
    let offset = 0;
    let elem = arg.elem;
    do {
      if (!isNaN(elem[`offset${arg.position}`])) {
        offset += elem[`offset${arg.position}`];
      }
    } while (elem = elem.offsetParent as HTMLElement);

    return offset;
  }
}
