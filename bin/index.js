#!/usr/bin/env node

const argv = require('process').argv
const version = require('../package.json').version
// 没有输入命令时, 默认给一个全局帮助命令
const command = argv[2] || '--help'
if (command.startsWith('-')) {
    // 说明是一个全局参数, 比如 --version, -v, --help, -h 这种
    const option = command.replace(/^-+/, '')
    switch (option) {
        case 'h':
        case 'help':
            console.log('展示帮助信息');
            break;
        case 'v':
        case 'version':
            console.log('current version: ' + version);
            break;
        default:
            console.log('invalid global option');
            break;
    }
} else {
    // 说明是一个正常的命令
    switch (command) {
        case 'init':
            console.log('init command executed');
            break;
        default:
            console.log('invalid command');
            break;
    }
}
