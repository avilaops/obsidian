export type EventBus = import("./event_utils.js").EventBus;
export type DownloadManager = import("./download_manager.js").DownloadManager;
export type IPDFLinkService = import("./interfaces.js").IPDFLinkService;
export type PDFDocumentProxy = import("../src/display/api.js").PDFDocumentProxy;
export type PDFOutlineViewerOptions = {
    /**
     * - The viewer element.
     */
    container: HTMLDivElement;
    /**
     * - The application event bus.
     */
    eventBus: EventBus;
    /**
     * - The navigation/linking service.
     */
    linkService: IPDFLinkService;
    /**
     * - The download manager.
     */
    downloadManager: DownloadManager;
};
export type PDFOutlineViewerRenderParameters = {
    /**
     * - An array of outline objects.
     */
    outline: any[] | null;
    /**
     * - A {PDFDocument} instance.
     */
    pdfDocument: PDFDocumentProxy;
};
/**
 * @typedef {Object} PDFOutlineViewerOptions
 * @property {HTMLDivElement} container - The viewer element.
 * @property {EventBus} eventBus - The application event bus.
 * @property {IPDFLinkService} linkService - The navigation/linking service.
 * @property {DownloadManager} downloadManager - The download manager.
 */
/**
 * @typedef {Object} PDFOutlineViewerRenderParameters
 * @property {Array|null} outline - An array of outline objects.
 * @property {PDFDocumentProxy} pdfDocument - A {PDFDocument} instance.
 */
export class PDFOutlineViewer extends BaseTreeViewer {
    /**
     * @param {PDFOutlineViewerOptions} options
     */
    constructor(options: PDFOutlineViewerOptions);
    linkService: import("./interfaces.js").IPDFLinkService;
    downloadManager: import("./download_manager.js").DownloadManager;
    _currentPageNumber: any;
    _isPagesLoaded: boolean;
    _sidebarView: any;
    setPageNumber(pageNumber: any): void;
    _outline: any[] | null | undefined;
    _pageNumberToDestHashCapability: any;
    _currentOutlineItemCapability: any;
    /**
     * @protected
     */
    protected _bindLink(element: any, { url, newWindow, action, attachment, dest, setOCGState }: {
        url: any;
        newWindow: any;
        action: any;
        attachment: any;
        dest: any;
        setOCGState: any;
    }): void;
    /**
     * @private
     */
    private _setStyles;
    /**
     * @protected
     */
    protected _addToggleButton(div: any, { count, items }: {
        count: any;
        items: any;
    }): void;
    /**
     * @param {PDFOutlineViewerRenderParameters} params
     */
    renderTree({ outline, pdfDocument }: PDFOutlineViewerRenderParameters): void;
    /**
     * Find/highlight the current outline item, corresponding to the active page.
     * @private
     */
    private _currentOutlineItem;
    /**
     * To (significantly) simplify the overall implementation, we will only
     * consider *one* destination per page when finding/highlighting the current
     * outline item (similar to e.g. Adobe Reader); more specifically, we choose
     * the *first* outline item at the *lowest* level of the outline tree.
     * @private
     */
    private _getPageNumberToDestHash;
}
import { BaseTreeViewer } from "./base_tree_viewer.js";
