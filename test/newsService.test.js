process.env.NODE_ENV = 'test'

import chai from "chai";
const expect = chai.expect;
import { getAllArticles, getArticleById, getArticlesByParameters } from '../services/newsService.js';
import Article from '../models/article.js'

// describe('newsService Tests', () => {

//     it('getAllArticles Test', () => {
//         let articleEntries = Article.getAllArticles(ctx)


//     });

// })
