import connection from "../connection.js";

export default class Task {
    constructor(name, description, data){
        this.name = name;
        this.description = description;
        this.data = data;
    }

    static async create(task) {
        let query, values = [];

        query = "INSERT INTO task (name, createdAt, deadline, description) VALUES (?, ?, ?, ?)";
        values = [task.name, new Date(), task.data, task.description];
        
        await connection.query(query, values);
    }

    static async findAll(){
        let query;

        query = "SELECT *, DATE_FORMAT(deadline, '%d/%m/%Y') AS formatedDate FROM task";

        const [rows] = await connection.query(query);

        return rows;
    }

    static async delete(id) {
        let query, values = [];

        query = "DELETE FROM task WHERE taskId = ?";
        values = [id];
        
        await connection.query(query, values);
    }
}