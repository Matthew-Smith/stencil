/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
/* tslint:disable */

import '@stencil/core';




declare global {
  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}

  namespace StencilComponents {

    interface AppRoot {

    }

    interface CmpA {

    }

    interface CmpB {

    }

    interface CmpC {

    }

    interface CmpD {
      'uniqueId': string;
    }

    interface CmpScopedA {

    }

    interface CmpScopedB {

    }

    interface CmpSdA {

    }
  }


    interface HTMLAppRootElement extends StencilComponents.AppRoot, HTMLStencilElement {}

    var HTMLAppRootElement: {
      prototype: HTMLAppRootElement;
      new (): HTMLAppRootElement;
    };
    

    interface HTMLCmpAElement extends StencilComponents.CmpA, HTMLStencilElement {}

    var HTMLCmpAElement: {
      prototype: HTMLCmpAElement;
      new (): HTMLCmpAElement;
    };
    

    interface HTMLCmpBElement extends StencilComponents.CmpB, HTMLStencilElement {}

    var HTMLCmpBElement: {
      prototype: HTMLCmpBElement;
      new (): HTMLCmpBElement;
    };
    

    interface HTMLCmpCElement extends StencilComponents.CmpC, HTMLStencilElement {}

    var HTMLCmpCElement: {
      prototype: HTMLCmpCElement;
      new (): HTMLCmpCElement;
    };
    

    interface HTMLCmpDElement extends StencilComponents.CmpD, HTMLStencilElement {}

    var HTMLCmpDElement: {
      prototype: HTMLCmpDElement;
      new (): HTMLCmpDElement;
    };
    

    interface HTMLCmpScopedAElement extends StencilComponents.CmpScopedA, HTMLStencilElement {}

    var HTMLCmpScopedAElement: {
      prototype: HTMLCmpScopedAElement;
      new (): HTMLCmpScopedAElement;
    };
    

    interface HTMLCmpScopedBElement extends StencilComponents.CmpScopedB, HTMLStencilElement {}

    var HTMLCmpScopedBElement: {
      prototype: HTMLCmpScopedBElement;
      new (): HTMLCmpScopedBElement;
    };
    

    interface HTMLCmpSdAElement extends StencilComponents.CmpSdA, HTMLStencilElement {}

    var HTMLCmpSdAElement: {
      prototype: HTMLCmpSdAElement;
      new (): HTMLCmpSdAElement;
    };
    

  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {
    'app-root': JSXElements.AppRootAttributes;
    'cmp-a': JSXElements.CmpAAttributes;
    'cmp-b': JSXElements.CmpBAttributes;
    'cmp-c': JSXElements.CmpCAttributes;
    'cmp-d': JSXElements.CmpDAttributes;
    'cmp-scoped-a': JSXElements.CmpScopedAAttributes;
    'cmp-scoped-b': JSXElements.CmpScopedBAttributes;
    'cmp-sd-a': JSXElements.CmpSdAAttributes;
    }
  }

  namespace JSXElements {

    export interface AppRootAttributes extends HTMLAttributes {

    }

    export interface CmpAAttributes extends HTMLAttributes {

    }

    export interface CmpBAttributes extends HTMLAttributes {

    }

    export interface CmpCAttributes extends HTMLAttributes {

    }

    export interface CmpDAttributes extends HTMLAttributes {
      'uniqueId'?: string;
    }

    export interface CmpScopedAAttributes extends HTMLAttributes {

    }

    export interface CmpScopedBAttributes extends HTMLAttributes {

    }

    export interface CmpSdAAttributes extends HTMLAttributes {

    }
  }

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'cmp-a': HTMLCmpAElement
    'cmp-b': HTMLCmpBElement
    'cmp-c': HTMLCmpCElement
    'cmp-d': HTMLCmpDElement
    'cmp-scoped-a': HTMLCmpScopedAElement
    'cmp-scoped-b': HTMLCmpScopedBElement
    'cmp-sd-a': HTMLCmpSdAElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'cmp-a': HTMLCmpAElement;
    'cmp-b': HTMLCmpBElement;
    'cmp-c': HTMLCmpCElement;
    'cmp-d': HTMLCmpDElement;
    'cmp-scoped-a': HTMLCmpScopedAElement;
    'cmp-scoped-b': HTMLCmpScopedBElement;
    'cmp-sd-a': HTMLCmpSdAElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }

