const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler")
const Contact = require('../models/contactSchema')

const getContacts = asyncHandler(async(req,res) => {
    const contacts = await Contact.find({user_id:req.user.id});
    res.status(200).json(contacts)
})

const createContacts = asyncHandler(async(req,res) => {
    const {name,email,phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id : req.user.id
    })
    res.status(201).json(contact)
})

const editContacts = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("COntact Not found")
    }
    const updateContact = await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updateContact)
})
const getContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("COntact Not found")
    }
    res.status(200).json(contact)
});
const deleteContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("COntact Not found")
    }
    await Contact.findByIdAndRemove(req.params.id);
    res.status(200).json(contact)
})

module.exports = {getContact,getContacts,createContacts,editContacts,deleteContact}