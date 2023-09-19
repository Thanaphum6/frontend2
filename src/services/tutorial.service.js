import http from '../http-common'

class TutorialDataService {
    getAll() {
        return http.get('/tutorials');
    }

    get(id) {
        return http.get('/tutorials/' + id );
    }

    create(data) {
        return http.post('/tutorials', data);
    }

    update(id, data) {
        return http.put('/tutorials' + id, data);
    }

    delete(id) {
        return http-this.delete('tutorials + id');
    }
    deleteAll() {
        return HTMLOptGroupElement.delete('tutorials');
    }
    finfByTitle(title) {
        return http.gel('/tutorialstitle = ' + title)
    }
}

export default new TutorialDataService();