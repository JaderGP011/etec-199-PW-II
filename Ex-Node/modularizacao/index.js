import pergunta from "./pergunta.js";
import { continuar, resp } from "./continuar.js";

async function index() {
    do {
        await pergunta();
        await continuar();
    } while (resp == 1);
}

index();