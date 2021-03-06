const mongoose = require('mongoose');

module.exports = mongoose.model('Fingerprint', {
    hash: { type: String, index: true, unique: true },
    fromBrowser: {
        hash: String,
        user_agent: String,
        language: String,
        color_depth: Number,
        device_memory: Number,
        hardware_concurrency: Number,
        resolution: [Number],
        available_resolution: [Number],
        timezone_offset: Number,
        session_storage: Number,
        local_storage: Number,
        indexed_db: Number,
        open_database: Number,
        cpu_class: String,
        navigator_platform: String,
        regular_plugins: [String],
        canvas: String,
        webgl: String,
        webgl_vendor: String,
        adblock: Boolean,
        has_lied_languages: Boolean,
        has_lied_resolution: Boolean,
        has_lied_os: Boolean,
        has_lied_browser: Boolean,
        touch_support: [mongoose.Schema.Types.Mixed],
        js_fonts: [String],
    },
    fromIp: {
        businessName: String,
        businessWebsite: String,
        city: String,
        continent: String,
        country: String,
        countryCode: String,
        ipName: String,
        ipType: String,
        isp: String,
        lat: String,
        lon: String,
        org: String,
        query: String,
        region: String,
        status: String,
    },
    fromUserAgent: {
        isAuthoritative: Boolean,
        isMobile: Boolean,
        isTablet: Boolean,
        isiPad: Boolean,
        isiPod: Boolean,
        isiPhone: Boolean,
        isAndroid: Boolean,
        isBlackberry: Boolean,
        isOpera: Boolean,
        isIE: Boolean,
        isEdge: Boolean,
        isIECompatibilityMode: Boolean,
        isSafari: Boolean,
        isFirefox: Boolean,
        isWebkit: Boolean,
        isChrome: Boolean,
        isKonqueror: Boolean,
        isOmniWeb: Boolean,
        isSeaMonkey: Boolean,
        isFlock: Boolean,
        isAmaya: Boolean,
        isPhantomJS: Boolean,
        isEpiphany: Boolean,
        isDesktop: Boolean,
        isWindows: Boolean,
        isLinux: Boolean,
        isLinux64: Boolean,
        isMac: Boolean,
        isChromeOS: Boolean,
        isBada: Boolean,
        isSamsung: Boolean,
        isRaspberry: Boolean,
        isBot: Boolean,
        isCurl: Boolean,
        isAndroidTablet: Boolean,
        isWinJs: Boolean,
        isKindleFire: Boolean,
        isSilk: Boolean,
        isCaptive: Boolean,
        isSmartTV: Boolean,
        isUC: Boolean,
        isFacebook: Boolean,
        isAlamoFire: Boolean,
        silkAccelerated: Boolean,
        browser: String,
        version: String,
        os: String,
        platform: String,
        geoIp: Object,
        source: String,
    }
});