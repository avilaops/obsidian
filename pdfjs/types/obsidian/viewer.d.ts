export type ObsidianViewerProps = {
    isEmbed: boolean;
    pageBackground: string;
    pageInvert: boolean;
    dom: ObsidianViewerDOM;
    height: string | number;
    subpath: string;
    onViewerReattached: () => void;
    setHeight: (height: string | number) => void;
    setBackground: (background: string, invert: boolean) => void;
    applySubpath: (subpath: string) => void;
    pdfOutlineViewer: any;
};
export type ObsidianViewer = {
    initialBookmark: string;
    _initializedCapability: any;
    appConfig: Object;
    pdfDocument: import("../web/app.js").PDFDocumentProxy;
    pdfLoadingTask: import("../web/app.js").PDFDocumentLoadingTask;
    printService: null;
    pdfViewer: PDFViewer;
    pdfThumbnailViewer: PDFThumbnailViewer;
    pdfRenderingQueue: PDFRenderingQueue;
    pdfPresentationMode: PDFPresentationMode;
    pdfDocumentProperties: PDFDocumentProperties;
    pdfLinkService: PDFLinkService;
    pdfHistory: import("../web/pdf_history.js").PDFHistory;
    pdfSidebar: PDFSidebar;
    pdfOutlineViewer: PDFOutlineViewer;
    pdfAttachmentViewer: PDFAttachmentViewer;
    pdfLayerViewer: PDFLayerViewer;
    pdfCursorTools: PDFCursorTools;
    pdfScriptingManager: PDFScriptingManager;
    store: import("../web/view_history.js").ViewHistory;
    downloadManager: DownloadManager;
    overlayManager: OverlayManager;
    preferences: Preferences;
    toolbar: Toolbar;
    secondaryToolbar: SecondaryToolbar;
    eventBus: EventBus;
    l10n: import("../web/app.js").IL10n;
    annotationEditorParams: AnnotationEditorParams;
    imageAltTextSettings: ImageAltTextSettings;
    isInitialViewSet: boolean;
    isViewerEmbedded: boolean;
    url: string;
    baseUrl: string;
    mlManager: null;
    _downloadUrl: string;
    _eventBusAbortController: null;
    _windowAbortController: null;
    _globalAbortController: AbortController;
    documentInfo: null;
    metadata: null;
    _contentDispositionFilename: null;
    _contentLength: null;
    _saveInProgress: boolean;
    _wheelUnusedTicks: number;
    _wheelUnusedFactor: number;
    _touchManager: null;
    _touchUnusedTicks: number;
    _touchUnusedFactor: number;
    _PDFBug: null;
    _hasAnnotationEditors: boolean;
    _title: string;
    _printAnnotationStoragePromise: null;
    _isCtrlKeyDown: boolean;
    _caretBrowsing: null;
    _isScrolling: boolean;
    editorUndoBar: null;
    passwordPrompt: import("../web/app.js").IPasswordPrompt;
    sidebarMinWidth: number;
    findController: PDFFindController;
    findBar: import("../web/app.js").IPDFFindBar;
    location: import("../web/app.js").PDFViewerLocation;
    initialize(appConfig?: any): Promise<void>;
    _parseHashParams(): Promise<void>;
    _initializeViewerComponents(): Promise<void>;
    run(config: any): Promise<void>;
    readonly externalServices: any;
    readonly initialized: any;
    readonly initializedPromise: any;
    updateZoom(steps: any, scaleFactor: any, origin: any): void;
    zoomIn(): void;
    zoomOut(): void;
    zoomReset(): void;
    touchPinchCallback(origin: any, prevDistance: any, distance: any): void;
    touchPinchEndCallback(): void;
    readonly pagesCount: number;
    page: number;
    readonly supportsPrinting: any;
    readonly supportsFullscreen: any;
    readonly supportsPinchToZoom: any;
    readonly supportsIntegratedFind: any;
    readonly loadingBar: any;
    readonly supportsMouseWheelZoomCtrlKey: any;
    readonly supportsMouseWheelZoomMetaKey: any;
    readonly supportsCaretBrowsingMode: any;
    moveCaret(isUp: any, select: any): void;
    setTitleUsingUrl(url?: string, downloadUrl?: null): void;
    setTitle(title?: any): void;
    readonly _docFilename: string;
    readonly _docTitle: any;
    _hideViewBookmark(): void;
    close(): Promise<any>;
    open(args: Object): Promise<any>;
    download(): Promise<void>;
    save(): Promise<void>;
    downloadOrSave(): Promise<void>;
    _documentError(key: any, moreInfo?: null): Promise<void>;
    _otherError(key: string, moreInfo?: Object): string;
    progress(level: any): void;
    load(pdfDocument: any): void;
    getInitialViewOverrides(stored: any, hash: any, { rotation, sidebarView, scrollMode, spreadMode, sidebarWidth }: {
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
    _scriptingDocProperties(pdfDocument: any): Promise<any>;
    _initializeAutoPrint(pdfDocument: any, openActionPromise: any): Promise<void>;
    _initializeMetadata(pdfDocument: any): Promise<void>;
    _initializePageLabels(pdfDocument: any): Promise<any>;
    _initializePdfHistory({ fingerprint, viewOnLoad, initialDest }: {
        fingerprint: any;
        viewOnLoad: any;
        initialDest?: null | undefined;
    }): void;
    _initializeAnnotationStorageCallbacks(pdfDocument: any): void;
    setInitialView(storedHash: string, { rotation, sidebarView, scrollMode, spreadMode, sidebarWidth }?: Record<string, any>): void;
    _cleanup(): void;
    forceRendering(): void;
    beforePrint(): void;
    afterPrint(): void;
    rotatePages(delta: any): void;
    requestPresentationMode(): void;
    triggerPrinting(): void;
    bindEvents(): void;
    bindWindowEvents(): void;
    unbindEvents(): void;
    unbindWindowEvents(): void;
    testingClose(): Promise<void>;
    _accumulateTicks(ticks: any, prop: any): number;
    _accumulateFactor(previousScale: any, factor: any, prop: any): number;
    _unblockDocumentLoadEvent(): void;
    readonly scriptingReady: boolean;
} & ObsidianViewerProps;
export type ObsidianViewerDOM = {
    containerEl: HTMLElement;
    contentEl: HTMLDivElement;
    outlineViewEl: HTMLDivElement;
    pdfContainerEl: HTMLDivElement;
    sidebarContainerEl: HTMLDivElement;
    thumbnailViewEl: HTMLDivElement;
    viewerContainerEl: HTMLDivElement;
    viewerEl: HTMLDivElement;
};
export type ObsidianViewerParams = {
    baseConfig: Record<string, any>;
    l10n: IL10n;
    eventBus: EventBus;
    removePageBorders: boolean;
    dom: ObsidianViewerDOM;
    subpath?: string | null | undefined;
    height?: number | "auto" | "page" | undefined;
    isEmbed?: boolean | undefined;
    pageBackground?: string | null | undefined;
    pageInvert?: boolean | null | undefined;
};
export type PromiseWithResolvers = {
    resolve: (v: any) => void;
    reject: (v: any) => void;
    promise: Promise<any>;
};
export type PDFPresentationMode = import("../web/pdf_presentation_mode").PDFPresentationMode;
export type PDFDocumentProperties = import("../web/pdf_document_properties").PDFDocumentProperties;
export type PDFOutlineViewer = import("../web/pdf_outline_viewer").PDFOutlineViewer;
export type PDFAttachmentViewer = import("../web/pdf_attachment_viewer").PDFAttachmentViewer;
export type PDFLayerViewer = import("../web/pdf_layer_viewer").PDFLayerViewer;
export type PDFCursorTools = import("../web/pdf_cursor_tools").PDFCursorTools;
export type Preferences = import("../web/genericcom").Preferences;
export type Toolbar = import("../web/toolbar").Toolbar;
export type SecondaryToolbar = import("../web/secondary_toolbar").SecondaryToolbar;
export type AnnotationEditorParams = import("../web/annotation_editor_params").AnnotationEditorParams;
export type ImageAltTextSettings = import("../web/new_alt_text_manager").ImageAltTextSettings;
import { AppOptions } from "../web/app_options.js";
import { approximateFraction } from "../web/ui_utils.js";
import { BasePreferences } from "../web/preferences.js";
/**
 * @typedef {Object} ObsidianViewerProps
 * @property {boolean} isEmbed
 * @property {string} pageBackground
 * @property {boolean} pageInvert
 * @property {ObsidianViewerDOM} dom
 * @property {string | number} height
 * @property {string} subpath
 * @property {() => void} onViewerReattached
 * @property {(height: string | number) => void} setHeight
 * @property {(background: string, invert: boolean) => void} setBackground
 * @property {(subpath: string) => void} applySubpath
 * @property {any} pdfOutlineViewer
 */
/**
 * @typedef {PDFViewerApplication & ObsidianViewerProps} ObsidianViewer
 */
/**
 * @typedef {Object} ObsidianViewerDOM
 * @property {HTMLElement} containerEl
 * @property {HTMLDivElement} contentEl
 * @property {HTMLDivElement} outlineViewEl
 * @property {HTMLDivElement} pdfContainerEl
 * @property {HTMLDivElement} sidebarContainerEl
 * @property {HTMLDivElement} thumbnailViewEl
 * @property {HTMLDivElement} viewerContainerEl
 * @property {HTMLDivElement} viewerEl
 */
/**
 * @typedef {Object} ObsidianViewerParams
 * @property {Record<string, any>} baseConfig
 * @property {IL10n} l10n
 * @property {EventBus} eventBus
 * @property {boolean} removePageBorders
 * @property {ObsidianViewerDOM} dom
 * @property {string | null} [subpath]
 * @property {number | 'page' | 'auto'} [height]
 * @property {boolean} [isEmbed]
 * @property {string | null} [pageBackground]
 * @property {boolean | null} [pageInvert]
 */
/**
 * @param {ObsidianViewerParams} params
 */
export function createObsidianPDFViewer(params: ObsidianViewerParams): any;
/**
 * @typedef {Object} PromiseWithResolvers
 * @property {(v: any) => void} resolve
 * @property {(v: any) => void} reject
 * @property {Promise<any>} promise
 */
/**
 * @returns {PromiseWithResolvers}
 */
export function createPromiseWithResolvers(): PromiseWithResolvers;
import { DEFAULT_SCALE } from "../web/ui_utils.js";
import { DEFAULT_SCALE_VALUE } from "../web/ui_utils.js";
import { DownloadManager } from "../web/download_manager.js";
import { EventBus } from "../web/event_utils.js";
import { FindState } from "../web/pdf_find_controller.js";
import { IL10n } from "../web/interfaces.js";
import { IPasswordPrompt } from "../web/password_prompt.js";
import { IPDFFindBar } from "../web/pdf_find_bar.js";
import { LinkTarget } from "../web/pdf_link_service.js";
import { MAX_SCALE } from "../web/ui_utils.js";
import { MIN_SCALE } from "../web/ui_utils.js";
export class ObsidianServices extends BaseExternalServices {
    constructor(preferences: any, l10n: any);
    preferences: any;
    l10n: any;
    createDownloadManager(): DownloadManager;
    createPreferences(): ObsidianPreferences;
    createL10n(): any;
    createScripting(): null;
}
import { parseQueryString } from "../web/ui_utils.js";
import { PDFFindController } from "../web/pdf_find_controller.js";
import { PDFLinkService } from "../web/pdf_link_service.js";
import { PDFPageView } from "../web/pdf_page_view.js";
import { PDFRenderingQueue } from "../web/pdf_rendering_queue.js";
import { PDFScriptingManager } from "../web/pdf_scripting_manager.js";
import { PDFSidebar } from "../web/pdf_sidebar.js";
import { PDFThumbnailView } from "../web/pdf_thumbnail_view.js";
import { PDFThumbnailViewer } from "../web/pdf_thumbnail_viewer.js";
import { PDFViewer } from "../web/pdf_viewer.js";
import { PDFViewerApplication } from "../web/app.js";
import { removeNullCharacters } from "../web/ui_utils.js";
import { scrollIntoView } from "../web/ui_utils.js";
import { SIDEBAR_MIN_WIDTH } from "../web/pdf_sidebar.js";
import { OverlayManager } from "../web/overlay_manager.js";
import { BaseExternalServices } from "../web/external_services.js";
/** @typedef {import("../web/pdf_presentation_mode").PDFPresentationMode} PDFPresentationMode */
/** @typedef {import("../web/pdf_document_properties").PDFDocumentProperties} PDFDocumentProperties */
/** @typedef {import("../web/pdf_outline_viewer").PDFOutlineViewer} PDFOutlineViewer */
/** @typedef {import("../web/pdf_attachment_viewer").PDFAttachmentViewer} PDFAttachmentViewer */
/** @typedef {import("../web/pdf_layer_viewer").PDFLayerViewer} PDFLayerViewer */
/** @typedef {import("../web/pdf_cursor_tools").PDFCursorTools} PDFCursorTools */
/** @typedef {import("../web/genericcom").Preferences} Preferences */
/** @typedef {import("../web/toolbar").Toolbar} Toolbar */
/** @typedef {import("../web/secondary_toolbar").SecondaryToolbar} SecondaryToolbar */
/** @typedef {import("../web/annotation_editor_params").AnnotationEditorParams} AnnotationEditorParams */
/** @typedef {import("../web/new_alt_text_manager").ImageAltTextSettings} ImageAltTextSettings */
/**
 * @module pdfjsViewer
 */
declare class ObsidianPreferences extends BasePreferences {
    constructor(preferences: any);
    /** @type {Object} */
    preferences: Object;
    _writeToStorage(): Promise<void>;
    _readFromStorage(): Promise<Object>;
    getAll(): Promise<Object>;
    set(name: any, value: any): Promise<void>;
    get(name: any): Promise<any>;
}
export { AppOptions, approximateFraction, BasePreferences, DEFAULT_SCALE, DEFAULT_SCALE_VALUE, DownloadManager, EventBus, FindState, IL10n, IPasswordPrompt, IPDFFindBar, LinkTarget, MAX_SCALE, MIN_SCALE, parseQueryString, PDFFindController, PDFLinkService, PDFPageView, PDFRenderingQueue, PDFScriptingManager, PDFSidebar, PDFThumbnailView, PDFThumbnailViewer, PDFViewer, PDFViewerApplication, removeNullCharacters, scrollIntoView, SIDEBAR_MIN_WIDTH };
