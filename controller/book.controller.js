const Book = require('../models/book.models');

exports.createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books);
};

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) throw Error('Buku tidak ditemukan');
        res.json(book);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) throw Error('Buku tidak ditemukan');
        res.json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) throw Error('Buku tidak ditemukan');
        res.json({ message: 'Buku dihapus' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
