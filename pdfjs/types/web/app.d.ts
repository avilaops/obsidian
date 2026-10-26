export type IL10n = import("./interfaces.js").IL10n;
export type PDFDocumentProxy = import("../src/display/api.js").PDFDocumentProxy;
export type PDFDocumentLoadingTask = import("../src/display/api.js").PDFDocumentLoadingTask;
export type IPasswordPrompt = import("./password_prompt").IPasswordPrompt;
export type IPDFFindBar = import("./pdf_find_bar").IPDFFindBar;
export type PDFViewerLocation = import("./pdf_viewer").PDFViewerLocation;
export namespace PDFViewerApplication {
    export let initialBookmark: string;
    export let _initializedCapability: any;
    export let appConfig: Object;
    export let pdfDocument: PDFDocumentProxy;
    export let pdfLoadingTask: PDFDocumentLoadingTask;
    export let printService: null;
    export let pdfViewer: PDFViewer;
    export let pdfThumbnailViewer: PDFThumbnailViewer;
    export let pdfRenderingQueue: PDFRenderingQueue;
    export let pdfPresentationMode: PDFPresentationMode;
    export let pdfDocumentProperties: PDFDocumentProperties;
    export let pdfLinkService: PDFLinkService;
    export let pdfHistory: PDFHistory;
    export let pdfSidebar: PDFSidebar;
    export let pdfOutlineViewer: PDFOutlineViewer;
    export let pdfAttachmentViewer: PDFAttachmentViewer;
    export let pdfLayerViewer: PDFLayerViewer;
    export let pdfCursorTools: PDFCursorTools;
    export let pdfScriptingManager: PDFScriptingManager;
    export let store: ViewHistory;
    export let downloadManager: DownloadManager;
    export let overlayManager: OverlayManager;
    export let preferences: Preferences;
    export let toolbar: Toolbar;
    export let secondaryToolbar: SecondaryToolbar;
    export let eventBus: EventBus;
    export let l10n: IL10n;
    export let annotationEditorParams: AnnotationEditorParams;
    export let imageAltTextSettings: ImageAltTextSettings;
    export let isInitialViewSet: boolean;
    export let isViewerEmbedded: boolean;
    export let url: string;
    export let baseUrl: string;
    export let mlManager: null;
    export let _downloadUrl: string;
    export let _eventBusAbortController: null;
    export let _windowAbortController: null;
    export let _globalAbortController: AbortController;
    export let documentInfo: null;
    export let metadata: null;
    export let _contentDispositionFilename: null;
    export let _contentLength: null;
    export let _saveInProgress: boolean;
    export let _wheelUnusedTicks: number;
    export let _wheelUnusedFactor: number;
    export let _touchManager: null;
    export let _touchUnusedTicks: number;
    export let _touchUnusedFactor: number;
    export let _PDFBug: null;
    export let _hasAnnotationEditors: boolean;
    export let _title: string;
    export let _printAnnotationStoragePromise: null;
    export let _isCtrlKeyDown: boolean;
    export let _caretBrowsing: null;
    export let _isScrolling: boolean;
    export let editorUndoBar: null;
    export let passwordPrompt: IPasswordPrompt;
    export { SIDEBAR_MIN_WIDTH as sidebarMinWidth };
    export let findController: PDFFindController;
    export let findBar: IPDFFindBar;
    export let location: PDFViewerLocation;
    export function initialize(appConfig?: any): Promise<void>;
    /**
     * Potentially parse special debugging flags in the hash section of the URL.
     * @private
     */
    export function _parseHashParams(): Promise<void>;
    export function _initializeViewerComponents(): Promise<void>;
    export function run(config: any): Promise<void>;
    export const externalServices: any;
    export const initialized: any;
    export const initializedPromise: any;
    export function updateZoom(steps: any, scaleFactor: any, origin: any): void;
    export function zoomIn(): void;
    export function zoomOut(): void;
    export function zoomReset(): void;
    export function touchPinchCallback(origin: any, prevDistance: any, distance: any): void;
    export function touchPinchEndCallback(): void;
    export const pagesCount: number;
    export let page: number;
    export const supportsPrinting: any;
    export const supportsFullscreen: any;
    export const supportsPinchToZoom: any;
    export const supportsIntegratedFind: any;
    export const loadingBar: any;
    export const supportsMouseWheelZoomCtrlKey: any;
    export const supportsMouseWheelZoomMetaKey: any;
    export const supportsCaretBrowsingMode: any;
    export function moveCaret(isUp: any, select: any): void;
    export function setTitleUsingUrl(url?: string, downloadUrl?: null): void;
    export function setTitle(title?: any): void;
    export const _docFilename: string;
    export const _docTitle: any;
    /**
     * @private
     */
    export function _hideViewBookmark(): void;
    /**
     * Closes opened PDF document.
     * @returns {Promise} - Returns the promise, which is resolved when all
     *                      destruction is completed.
     */
    export function close(): Promise<any>;
    /**
     * Opens a new PDF document.
     * @param {Object} args - Accepts any/all of the properties from
     *   {@link DocumentInitParameters}, and also a `originalUrl` string.
     * @returns {Promise} - Promise that is resolved when the document is opened.
     */
    export function open(args: Object): Promise<any>;
    export function download(): Promise<void>;
    export function save(): Promise<void>;
    export function downloadOrSave(): Promise<void>;
    /**
     * Report the error; used for errors affecting loading and/or parsing of
     * the entire PDF document.
     */
    export function _documentError(key: any, moreInfo?: null): Promise<void>;
    /**
     * Report the error; used for errors affecting e.g. only a single page.
     * @param {string} key - The localization key for the error.
     * @param {Object} [moreInfo] - Further information about the error that is
     *                              more technical. Should have a 'message' and
     *                              optionally a 'stack' property.
     * @returns {string} A (localized) error message that is human readable.
     */
    export function _otherError(key: string, moreInfo?: Object): string;
    export function progress(level: any): void;
    export function load(pdfDocument: any): void;
    export function getInitialViewOverrides(stored: any, hash: any, { rotation, sidebarView, scrollMode, spreadMode, sidebarWidth }: {
        rotation: any;
        sidebarView: any;
        scrollMode: any;
        spreadMode: any;
        sidebarWidth: any;
    }): {
        hash: any;
        rotation: any;
        sidebarView: any;
        scrollMode: any;
        spreadMode: any;
        sidebarWidth: any;
    };
    export function _scriptingDocProperties(pdfDocument: any): Promise<any>;
    export function _initializeAutoPrint(pdfDocument: any, openActionPromise: any): Promise<void>;
    export function _initializeMetadata(pdfDocument: any): Promise<void>;
    export function _initializePageLabels(pdfDocument: any): Promise<any>;
    export function _initializePdfHistory({ fingerprint, viewOnLoad, initialDest }: {
        fingerprint: any;
        viewOnLoad: any;
        initialDest?: null | undefined;
    }): void;
    export function _initializeAnnotationStorageCallbacks(pdfDocument: any): void;
    /**
     * @param {string} storedHash
     * @param {Record<string, any>} state
     */
    export function setInitialView(storedHash: string, { rotation, sidebarView, scrollMode, spreadMode, sidebarWidth }?: Record<string, any>): void;
    export function _cleanup(): void;
    export function forceRendering(): void;
    export function beforePrint(): void;
    export function afterPrint(): void;
    export function rotatePages(delta: any): void;
    export function requestPresentationMode(): void;
    export function triggerPrinting(): void;
    export function bindEvents(): void;
    export function bindWindowEvents(): void;
    export function unbindEvents(): void;
    export function unbindWindowEvents(): void;
    export function testingClose(): Promise<void>;
    export function _accumulateTicks(ticks: any, prop: any): number;
    export function _accumulateFactor(previousScale: any, factor: any, prop: any): number;
    /**
     * Should be called *after* all pages have loaded, or if an error occurred,
     * to unblock the "load" event; see https://bugzilla.mozilla.org/show_bug.cgi?id=1618553
     * @private
     */
    export function _unblockDocumentLoadEvent(): void;
    export const scriptingReady: boolean;
}
import { PDFViewer } from "./pdf_viewer.js";
import { PDFRenderingQueue } from "./pdf_rendering_queue.js";
import { PDFLinkService } from "./pdf_link_service.js";
import { PDFHistory } from "./pdf_history.js";
import { PDFScriptingManager } from "./pdf_scripting_manager.js";
import { ViewHistory } from "./view_history.js";
import { OverlayManager } from "./overlay_manager.js";
import { EventBus } from "./event_utils.js";
import { PDFFindController } from "./pdf_find_controller.js";
