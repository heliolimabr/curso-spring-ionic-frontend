import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { ProdutoDTO } from "../../models/produto.dto";

@Injectable()
export class ProdutoService {

    constructor(public http: HttpClient){

    }

    findByCategoria(categoria_id : string, page: number = 0, linesPerPage: number = 24) : Observable<ProdutoDTO[]> {
        return this.http.get<ProdutoDTO[]>(`${API_CONFIG.baseUrl}/produtos/?categorias=${categoria_id}&page=${page}&linesPerPage=${linesPerPage}`);
    }

    getSmallImageFromBucket(id: string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/prod${id}-small.jpg`;
        return this.http.get(url, {responseType : 'blob'});
    }

    findById(produto_id : string) : Observable<ProdutoDTO> {
        return this.http.get<ProdutoDTO>(`${API_CONFIG.baseUrl}/produtos/${produto_id}`);
    }

    getImageFromBucket(id: string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/prod${id}.jpg`;
        return this.http.get(url, {responseType : 'blob'});
    }
}
