const express = require('express');
const router = express.Router();
const { create, read, readAll, update, deleteTodo } = require('../services/todoService');
router.get("/todos", async (req, res) => {
    try {
        const data = await readAll();
        //console.log("sdsd",data);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(404).json({ "err": error });
    }
});

router.get("/todo/:title",async(req,res)=>{
    try {
        console.log(req.params.title);
        const data = await read(req.params.title);
        return res.status(200).json({
            data : data,
            messsage : "Successfully found the todo",
        })
    } catch (error) {
        return res.status(404).json({ "err": error });  
    }
})

router.post("/todo", async (req, res) => {
    try {
        const data = await create(req.body);
        return res.status(200).json({
            messsage: "Successfully created todo",
            data: data
        });
    } catch (error) {
        return res.status(404).json({ "err": error });
    }
})

router.patch("/todo/:title",async(req,res)=>{
          try {
              const data = await update(req.params.title,req.body);
              return res.status(200).json({
                messsage: "Successfully updated todo",
                data: data
            });

          } catch (error) {
            return res.status(404).json({ "err": error });
          }
})

router.delete("/todo/:title",async(req,res)=> {
    try {
        const data = await deleteTodo(req.params.title)
        return res.status(200).json({
          messsage: "Successfully deleted todo",
          data: data
      });

    } catch (error) {
      return res.status(404).json({ "err": error });
    }
})

module.exports = router;