export class Constants {
    static get HTTP_HEADERS() {
        return {
            'Content-Type': 'application/json',
        };
    }
    static get SUCCESS_HTTP_CODES() {
        return [200, 201, 202];
    }

    static get MOVIE_DB_API_KEY() {
        return '4bb955e6aae237838a1240436707d121';
    }
}