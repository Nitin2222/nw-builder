var semver = require('semver');

module.exports = {
    win32: {
        needsZip: true,
        getRunnable: function(params) {
            return (params.customName ? params.customName + '.exe' : 'nw.exe');
        },
        files: { // First file must be the executable
            '<=0.9.2': ['ffmpegsumo.dll', 'icudt.dll', 'libEGL.dll', 'libGLESv2.dll', 'nw.pak'],
            '>0.9.2 <0.12.0': ['ffmpegsumo.dll', 'icudtl.dat', 'libEGL.dll', 'libGLESv2.dll', 'nw.pak', 'locales'],
            '>=0.12.0': ['ffmpeg.dll', 'icudtl.dat', 'libEGL.dll', 'libGLESv2.dll', 'nw_100_percent.pak','nw_200_percent.pak', 'locales', 'd3dcompiler_47.dll','VoIPAudioForMeetings_elf.dll','VoIPAudioForMeetings.dll','node.dll','natives_blob.bin','resources.pak','libexif.dll']
        },
        versionNameTemplate: 'v${ version }/${ name }-v${ version }-win-ia32.zip'
    },
    win64: {
        needsZip: true,
        getRunnable: function(params) {
            return (params.customName ? params.customName + '.exe' : 'nw.exe');
        },
        files: { // First file must be the executable
            '<=0.9.2': ['ffmpegsumo.dll', 'icudt.dll', 'libEGL.dll', 'libGLESv2.dll', 'nw.pak', 'locales'],
            '>0.9.2 <0.12.0': ['ffmpegsumo.dll', 'icudtl.dat', 'libEGL.dll', 'libGLESv2.dll', 'nw.pak', 'locales'],
            '>=0.12.0': ['ffmpeg.dll', 'icudtl.dat', 'libEGL.dll', 'libGLESv2.dll', 'nw_100_percent.pak','nw_200_percent.pak', 'locales', 'd3dcompiler_47.dll','VoIPAudioForMeetings_elf.dll','VoIPAudioForMeetings.dll','node.dll','natives_blob.bin','resources.pak','libexif.dll']
        },
        versionNameTemplate: 'v${ version }/${ name }-v${ version }-win-x64.zip'
    },
    osx32: {
        getRunnable: function(params) {
            if(semver.satisfies(params.version, '>=0.12.0 || ~0.12.0-alpha')) {
                var appName = params.customName ? params.customName : 'nwjs';
                return appName + '.app/Contents/MacOS/' + appName;
            } else {
                return 'node-webkit.app/Contents/MacOS/node-webkit';
            }
        },
        files: {
            '<0.12.0-alpha': ['node-webkit.app'],
            '>=0.12.0 || ~0.12.0-alpha': ['nwjs.app']
        },
        versionNameTemplate: 'v${ version }/${ name }-v${ version }-osx-ia32.zip'
    },
    osx64: {
        getRunnable: function(params) {
            if(semver.satisfies(params.version, '>=0.12.0 || ~0.12.0-alpha')) {
                var appName = params.customName ? params.customName : 'nwjs';
                return appName + '.app/Contents/MacOS/' + appName;
            } else {
                return 'node-webkit.app/Contents/MacOS/node-webkit';
            }
        },
        files: {
            '<0.12.0-alpha': ['node-webkit.app'],
            '>=0.12.0 || ~0.12.0-alpha': ['nwjs.app']
        },
        versionNameTemplate: 'v${ version }/${ name }-v${ version }-osx-x64.zip'
    },
    linux32: {
        needsZip: true,
        chmod: '0755',
        getRunnable: function(params) { return 'nw'; },
        files: { // First file must be the executable
            '<=0.9.2': ['nw', 'nw.pak', 'libffmpegsumo.so'],
            '>0.9.2': ['nw', 'nw.pak', 'libffmpegsumo.so', 'icudtl.dat']
        },
        versionNameTemplate: 'v${ version }/${ name }-v${ version }-linux-ia32.tar.gz'
    },
    linux64: {
        needsZip: true,
        chmod: '0755', // chmod file file to be executable
        getRunnable: function(params) { return 'nw'; },
        files: { // First file must be the executable
            '<=0.9.2': ['nw', 'nw.pak', 'libffmpegsumo.so'],
            '>0.9.2': ['nw', 'nw.pak', 'libffmpegsumo.so', 'icudtl.dat']
        },
        versionNameTemplate: 'v${ version }/${ name }-v${ version }-linux-x64.tar.gz'
    }
};
