requirejs.config({
    paths: {
        'durandal': '../bower_components/Durandal/js',
        'i18next': '../lib/i18next/i18next.amd-1.7.3', // TODO use bower versions
        'jquery': '../bower_components/jquery/jquery',
        'knockout': '../bower_components/knockout/dist/knockout',
        'knockout.punches': '../bower_components/knockout.punches/knockout.punches',
        'lodash': '../bower_components/lodash/dist/lodash',
        'plugins': '../bower_components/Durandal/js/plugins',
        'text': '../bower_components/requirejs-text/text',
        'transitions': '../bower_components/Durandal/js/transitions'
    }
});

define(function (require) {

    var _ = require('lodash');

    // ### I18N
    var i18next = require('i18next');
    i18next.init({
        fallbackLng: 'en',
        resGetPath: '/scripts/app/locales/{{lng}}/{{ns}}.json',
        interpolationPrefix: '{{',
        interpolationSuffix: '}}'
    });

    // Knockout
    var ko = require('knockout');

    // Enables cool Angular-style functionality:
    require('knockout.punches');
    ko.punches.enableAll();
    ko.punches.attributeInterpolationMarkup.enable();

    // I18N Binder
    ko.filters.i18n = function (key) {
        var params = _.map(_.tail(_.toArray(arguments)), function(param) {
            return ko.unwrap(param);
        });
        return i18next.t(key, params);
    };

    // Example handlebars text filter to repeat a value `{{ value | repeat: n }}`
    ko.filters.repeat = function(value, n) {
        var text = value;
        for (var i = 1; i < n; i++) text = text + value;
        return text
    };

    // Durandal
    var app = require('durandal/app');
    var system = require('durandal/system');
    var viewLocator = require('durandal/viewLocator');

    system.debug(true);

    app.title = i18next.t('app.name');
    app.configurePlugins({
        observable: true, // eliminates need for `ko.observable(...)`
        router: true
    });

    app.start()
        .then(function () {
            viewLocator.useConvention();
            app.setRoot('Shell', 'entrance');
        });
});
