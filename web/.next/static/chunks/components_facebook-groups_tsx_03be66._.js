(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_facebook-groups_tsx_03be66._.js", {

"[project]/components/facebook-groups.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>FacebookGroups)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
function FacebookGroups() {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [accessToken, setAccessToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Check if FB SDK is ready 
    const [isFbReady, setIsFbReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FacebookGroups.useEffect": ()=>{
            // Function to check if FB SDK is loaded
            const checkFbLoaded = {
                "FacebookGroups.useEffect.checkFbLoaded": ()=>{
                    if (window.FB) {
                        setIsFbReady(true);
                        return true;
                    }
                    return false;
                }
            }["FacebookGroups.useEffect.checkFbLoaded"];
            // If FB is already loaded, check to see if user is logged in
            if (checkFbLoaded()) {
                console.log('FB is loaded');
                // window.FB.getLoginStatus((response) => {
                //   const { status } = response
                //   if (status === 'connected') {
                //     setIsFacebookConnected(true)
                //     setFacebookUserId(response.authResponse.userID)
                //     setAccessToken(response.authResponse.accessToken as string)
                //   } else if (status === 'not_authorized') {
                //     console.log('not authorized')
                //   }
                // })
                return;
            }
            // Otherwise set up a listener for when it's loaded
            const interval = setInterval({
                "FacebookGroups.useEffect.interval": ()=>{
                    if (checkFbLoaded()) {
                        clearInterval(interval);
                    }
                }
            }["FacebookGroups.useEffect.interval"], 300);
            // Cleanup on unmount
            return ({
                "FacebookGroups.useEffect": ()=>clearInterval(interval)
            })["FacebookGroups.useEffect"];
        }
    }["FacebookGroups.useEffect"], []);
    // Handle Facebook login
    const handleFacebookLogin = ()=>{
        if (!isFbReady || !window.FB) {
            setError('Facebook SDK is not loaded yet. Please try again in a moment.');
            return;
        }
        setLoading(true);
        setError(null);
        window.FB.login(function(response) {
            if (response.authResponse) {
                console.log(response);
                // Get access token
                const token = response.authResponse.accessToken;
                setAccessToken(token);
                window.FB.api(`/${response.authResponse.userID}/groups`, (response)=>{
                    console.log(response);
                });
            } else {
                setLoading(false);
                setError('Facebook login was canceled');
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "facebook-groups-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Facebook Groups"
            }, void 0, false, {
                fileName: "[project]/components/facebook-groups.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            !accessToken ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleFacebookLogin,
                disabled: loading || !isFbReady,
                className: "fb-login-button",
                children: loading ? 'Loading...' : !isFbReady ? 'Waiting for Facebook SDK...' : 'Login with Facebook'
            }, void 0, false, {
                fileName: "[project]/components/facebook-groups.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>console.log('log out'),
                className: "logout-button",
                children: "Logout"
            }, void 0, false, {
                fileName: "[project]/components/facebook-groups.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "error-message",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/facebook-groups.tsx",
                lineNumber: 99,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/facebook-groups.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(FacebookGroups, "04Q8DWC7SpHoqqW/X3IVX1bMauM=");
_c = FacebookGroups;
var _c;
__turbopack_refresh__.register(_c, "FacebookGroups");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_facebook-groups_tsx_03be66._.js.map