# How to setup Angular on Saleforce visual page? #
Amending the base HTML file as follows:
1. Removing pre-process intruction "doctype"
2. Changing html tag with the SalesForce's tag `apex:page`
3. Adding back closing tags, which aren't needed on current HTML, such like `base`, `meta` and `link`.
4. Static files shall change to refer to SalesForce's `Static Resource`, and changing to use the specific reference path.
   `{!URLFOR($Resource.${Static resource name}, '${file path in the compressed file}')}`
   
```
<apex:page controller="salesfoceTest" sidebar="false" showHeader="false" standardStylesheets="false">
    <head>
        <meta charset="utf-8"></meta>
        <title>SalesForce Test</title>
        <base href="/"></base>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" type="image/x-icon" href="{!URLFOR($Resource.salesfoceTest, 'favicon.ico')}"></link>
    </head>
    <body>
        <app-root></app-root>
        <script src="{!URLFOR($Resource.salesfoceTest, 'runtime-es2015.js')}" type="module"></script>
        <script src="{!URLFOR($Resource.salesfoceTest, 'runtime-es5.js')}" nomodule="true" defer="true"></script>
        <script src="{!URLFOR($Resource.salesfoceTest, 'polyfills-es5.js')}" nomodule="true" defer="true"></script>
        <script src="{!URLFOR($Resource.salesfoceTest, 'polyfills-es2015.js')}" type="module"></script>
        <script src="{!URLFOR($Resource.salesfoceTest, 'styles-es2015.js')}" type="module"></script>
        <script src="{!URLFOR($Resource.salesfoceTest, 'styles-es5.js')}" nomodule="true" defer="true"></script>
        <script src="{!URLFOR($Resource.salesfoceTest, 'vendor-es2015.js')}" type="module"></script>
        <script src="{!URLFOR($Resource.salesfoceTest, 'vendor-es5.js')}" nomodule="true" defer="true"></script>
        <script src="{!URLFOR($Resource.salesfoceTest, 'main-es2015.js')}" type="module"></script>
        <script src="{!URLFOR($Resource.salesfoceTest, 'main-es5.js')}" nomodule="true" defer="true"></script>
        <script>
            ...
        </script>
    </body>
</apex:page>
```

# How to communicate with Saleforce controller?

# How to access the images from static resource of Saleforce?
