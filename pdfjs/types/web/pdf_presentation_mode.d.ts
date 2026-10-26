export type EventBus = import("./event_utils.js").EventBus;
export type PDFViewer = import("./pdf_viewer.js").PDFViewer;
export type PDFPresentationModeOptions = {
    /**
     * - The container for the viewer element.
     */
    container: HTMLDivElement;
    /**
     * - The document viewer.
     */
    pdfViewer: PDFViewer;
    /**
     * - The application event bus.
     */
    eventBus: EventBus;
};
/**
 * @typedef {Object} PDFPresentationModeOptions
 * @property {HTMLDivElement} container - The container for the viewer element.
 * @property {PDFViewer} pdfViewer - The document viewer.
 * @property {EventBus} eventBus - The application event bus.
 */
export class PDFPresentationMode {
    /**
     * @param {PDFPresentationModeOptions} options
     */
    constructor({ container, pdfViewer, eventBus }: PDFPresentationModeOptions);
    container: HTMLDivElement;
    pdfViewer: import("./pdf_viewer.js").PDFViewer;
    eventBus: import("./event_utils.js").EventBus;
    contextMenuOpen: boolean;
    mouseScrollTimeStamp: number;
    mouseScrollDelta: number;
    touchSwipeState: {
        startX: any;
        startY: any;
        endX: any;
        endY: any;
    } | null;
    /**
     * Request the browser to enter fullscreen mode.
     * @returns {Promise<boolean>} Indicating if the request was successful.
     */
    request(): Promise<boolean>;
    get active(): boolean;
    controlsTimeout: any;
    #private;
}
