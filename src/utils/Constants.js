export class Constants {
    static get HTTP_HEADERS() {
        return {
            'Content-Type': 'application/json',
        };
    }
    static get SUCCESS_HTTP_CODES() {
        return [200, 201, 202];
    }
}