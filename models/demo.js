import { Schema , model, models } from "mongoose";


const demoschema = new Schema({
    name: String,
    date: Date
})

const Demo = models.Demo || model('Demo', demoschema);

export default Demo;