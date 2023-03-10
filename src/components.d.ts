/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SharingBtn {
        /**
          * Share description text
         */
        "description": string;
        /**
          * Show text before icon
         */
        "showText": boolean;
        /**
          * Which platform to share
         */
        "to": string;
        /**
          * Website Url
         */
        "url": string;
    }
}
declare global {
    interface HTMLSharingBtnElement extends Components.SharingBtn, HTMLStencilElement {
    }
    var HTMLSharingBtnElement: {
        prototype: HTMLSharingBtnElement;
        new (): HTMLSharingBtnElement;
    };
    interface HTMLElementTagNameMap {
        "sharing-btn": HTMLSharingBtnElement;
    }
}
declare namespace LocalJSX {
    interface SharingBtn {
        /**
          * Share description text
         */
        "description"?: string;
        /**
          * Show text before icon
         */
        "showText"?: boolean;
        /**
          * Which platform to share
         */
        "to"?: string;
        /**
          * Website Url
         */
        "url"?: string;
    }
    interface IntrinsicElements {
        "sharing-btn": SharingBtn;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sharing-btn": LocalJSX.SharingBtn & JSXBase.HTMLAttributes<HTMLSharingBtnElement>;
        }
    }
}
