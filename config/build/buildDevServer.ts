import { IBuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = (options: IBuildOptions): DevServerConfiguration => {
    const { PORT } = options;
    return {
        port: PORT,
        open: true,
        // позволяет ходить по роутам через прямой ввод url в адресной строке
        historyApiFallback: true,
        hot: true
    }
}
