import express from 'express'
import { PrismaClient } from '@prisma/client'

const Prisma = new PrismaClient()
const app = express()
app.use(express.json())


app.post('/users', async (req, res) => {
    try {

        const user = await Prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({
            error: "Esse email ja foi cadastrado."
        })
    }
})

app.get('/users', async (req, res) => {
    let allUsers = []

    if (req.query.name || req.query.email || req.query.age) {
        allUsers = await Prisma.user.findMany({
            where: {

                name: {
                    contains: req.query.name,
                    mode: 'insensitive'
                },

                email: req.query.email,
                age: req.query.age
            }
        })
    } else {
        allUsers = await Prisma.user.findMany()
    }

    res.status(200).json(allUsers)
})
app.put('/users/:id', async (req, res) => {

    const userUpdated = await Prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    res.status(201).json(userUpdated)
})
app.delete('/users/:id', async (req, res) => {
    await Prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: "Usuario deletado" })
})

app.listen(3000)