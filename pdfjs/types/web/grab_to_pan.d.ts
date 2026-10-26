export type GrabToPanOptions = {
    element: HTMLElement;
};
/**
 * @typedef {Object} GrabToPanOptions
 * @property {HTMLElement} element
 */
export class GrabToPan {
    /**
     * Construct a GrabToPan instance for a given HTML element.
     * @param {GrabToPanOptions} options
     */
    constructor({ element }: GrabToPanOptions);
    element: HTMLElement;
    document: Document;
    overlay: HTMLDivElement;
    /**
     * Bind a mousedown event to the element to enable grab-detection.
     */
    activate(): void;
    /**
     * Removes all events. Any pending pan session is immediately stopped.
     */
    deactivate(): void;
    toggle(): void;
    /**
     * Whether to not pan if the target element is clicked.
     * Override this method to change the default behaviour.
     *
     * @param {Element} node - The target of the event.
     * @returns {boolean} Whether to not react to the click event.
     */
    ignoreTarget(node: Element): boolean;
    scrollLeftStart: number | undefined;
    scrollTopStart: number | undefined;
    clientXStart: any;
    clientYStart: any;
    #private;
}
