export class ExternalServices extends BaseExternalServices {
    createL10n(): Promise<GenericL10n>;
    createScripting(): GenericScripting;
    createSignatureStorage(eventBus: any, signal: any): SignatureStorage;
}
export function initCom(app: any): void;
export class MLManager {
    isEnabledFor(_name: any): Promise<boolean>;
    deleteModel(_service: any): Promise<null>;
    isReady(_name: any): boolean;
    guess(_data: any): void;
    toggleService(_name: any, _enabled: any): void;
}
export class Preferences extends BasePreferences {
    _writeToStorage(prefObj: any): Promise<void>;
    _readFromStorage(prefObj: any): Promise<{
        prefs: any;
    }>;
}
import { BaseExternalServices } from "./external_services.js";
import { GenericL10n } from "./genericl10n.js";
import { GenericScripting } from "./generic_scripting.js";
import { SignatureStorage } from "./generic_signature_storage.js";
import { BasePreferences } from "./preferences.js";
