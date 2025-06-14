import * as Controller from "./controllers/controller.js";

export default [
    {
        method: "POST",
        path: "/books",
        handler: Controller.create,
    },
    {
        method: "GET",
        path: "/books",
        handler: Controller.getAll,
    },
    {
        method: "GET",
        path: "/books/{bookId}",
        handler: Controller.findById,
    },
    {
        method: "PUT",
        path: "/books/{bookId}",
        handler: Controller.updateById,
    },
    {
        method: "DELETE",
        path: "/books/{bookId}",
        handler: Controller.removeById,
    },
];