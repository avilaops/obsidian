/**
 * BasePreferences - Abstract base class for storing persistent settings.
 *   Used for settings that should be applied to all opened documents,
 *   or every time the viewer is loaded.
 */
export class BasePreferences {
    /**
     * Stub function for writing preferences to storage.
     * @param {Object} prefObj The preferences that should be written to storage.
     * @returns {Promise} A promise that is resolved when the preference values
     *                    have been written.
     */
    _writeToStorage(prefObj: Object): Promise<any>;
    /**
     * Stub function for reading preferences from storage.
     * @param {Object} prefObj The preferences that should be read from storage.
     * @returns {Promise} A promise that is resolved with an {Object} containing
     *                    the preferences that have been read.
     */
    _readFromStorage(prefObj: Object): Promise<any>;
    /**
     * Reset the preferences to their default values and update storage.
     * @returns {Promise} A promise that is resolved when the preference values
     *                    have been reset.
     */
    reset(): Promise<any>;
    /**
     * Set the value of a preference.
     * @param {string} name The name of the preference that should be changed.
     * @param {boolean|number|string} value The new value of the preference.
     * @returns {Promise} A promise that is resolved when the value has been set,
     *                    provided that the preference exists and the types match.
     */
    set(name: string, value: boolean | number | string): Promise<any>;
    /**
     * Get the value of a preference.
     * @param {string} name The name of the preference whose value is requested.
     * @returns {Promise} A promise resolved with a {boolean|number|string}
     *                    containing the value of the preference.
     */
    get(name: string): Promise<any>;
    get initializedPromise(): null;
    #private;
}
