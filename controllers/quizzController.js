// const products = require('../model/productModel')


// const getAllProduct = async (req, res)=>{
//     try {
//         const productList = await products.find({});
//         res.status(200).json(productList);
//         console.log(req.params.id)

//     } catch (error) {
//         res.status(500).json({ message: "Error fetching products", error });
//     }
// }

// // const getProduct = async (req, res) => {
// //     try {
// //         console.log(req.params.id)
// //         const product = await products.findById(req.params.id);

// //         if (!product) {
// //             return res.status(404).json({ message: "Product not found" });
// //         }
// //         res.status(200).json(product);

// //     } catch (error) {
// //         console.log(error);
// //         res.status(500).json({ message: "Server error" });
// //     }
// // };

// //REVISED CODE AFTER THE ERROR OF CASTID OBJECT  CastError: Cast to ObjectId failed for value "{ id: '67d7b5dca31bd5556b4d2cdb' }" (type Object) at path "_id" for model "products"
// const getProduct = async (req, res) => {
//     try {
//         const {id} = req.params;
//         // console.log("Received ID:", id);
//         // console.log("hii");

//         // Validating  ID before querying the database
//         // if (!mongoose.Types.ObjectId.isValid(id)) {
//         //     return res.status(400).json({ message: "Invalid product ID" });
//         // }

//         // Find the product in the database
//         const product = await products.findById(id);

//         if (!product) {
//             return res.status(404).json({ message: "Product not found" });
//         }

//         res.status(200).json(product);

//     } catch (error) {
//         console.error("Error fetching product:", error);
//         res.status(500).json({ message: "Server error" });
//     }
// };


// const saveProduct = async (req, res) => {
//     try {
//         const { title, price, desc, productOwner } = req.body;

//         // Check if request body is empty
//         if (!req.body || Object.keys(req.body).length === 0) {
//             return res.status(400).json({ message: "Request body is empty" });
//         }

//         // Validate required fields
//         if (!title || !price || !desc || !productOwner) {
//             return res.status(400).json({ message: "All fields are required" });
//         }

//         // Create and save product in one step
//         const savedProduct = await products.create({ title, price, desc, productOwner });

//         // Send response
//         res.status(201).json({
//             message: "Product successfully created",
//             product: savedProduct
//         });

//     } catch (error) {
//         console.error("Error creating product:", error);
//         res.status(500).json({
//             message: "Internal server error",
//             error: error.message || error
//         });
//     }
// };


// const  updateProduct= async (req,res)=>{
//    try{
//     const {id} = req.params;
//     const productExist = await products.findOne({_id:id});
//     if(!productExist){
//         return res.status(404).json({message:"product not found"});
//     }
//     const updateProduct = await products.findByIdAndUpdate(id, req.body, {new:true})
//     res.status(201).json(updateProduct) ;

//    }catch(error){
//     res.status(500).json({message:"Error in updating product",
//     error: error.message || error
//     })

//    }
// }

// const deleteAllproduct = async (req,res)=>{
//     try{
//         const deleteAll = await products.deleteMany({});
//         res.status(200).json({ messsage: "All products Deleted successfully"})
//         if(deleteAll.deletedCount === 0){
//             res.status(404).json({ message : "No product found to delete"})
//         }
//     }catch(error){
//         res.status(500).json({message:"Error in deleting product"})
//     }
// }

// const deleteProduct = async (req, res) => {
//     try {
//         const { id } = req.params;

//         // Find and delete the product
//         const deleteOneProduct = await products.findByIdAndDelete(id);

//         // Check if the product exists
//         if (!deleteOneProduct) {
//             return res.status(404).json({ message: "Product not found" });
//         }

//         // Send success response only if deletion happened
//         res.status(200).json({
//             message: "One product is deleted successfully",
//             deletedProduct: deleteOneProduct
//         });

//     } catch (error) {
//         res.status(500).json({
//             message: "Error in deleting a product",
//             error: error.message || error
//         });
//     }
// };

// module.exports ={
//     getAllProduct,
//     getProduct,
//     saveProduct,
//     updateProduct,
//     deleteAllproduct,
//     deleteProduct
// }
const quizz = require('../models/quizzModel');

const getQuiz = async (req, res) => {
    try {
        console.log("getching all quizzes...");

        const quizzList = await quizz.find({});
        console.log(quizzList)

        if (quizzList.length === 0) {
            return res.status(404).json({ message: "No quizzes found" });
        }

        res.status(200).json(quizzList);

    } catch (error) {
        console.error("Error fetching quizzes:", error);
        res.status(500).json({ message: "Error fetching quizzes", error });
    }
};

const createQuizz = async (req, res) => {
    try {
        console.log(req.body)
        const { question, options, answer } = req.body;
        if (!question || !options || !answer) {
            res.status(201).json({ message: "All fields required" })
        }
        const quiz = await quizz.create({ question, options, answer }) //500 internal error for undefined 'quizz' before initialization so herer i changed the varible name from quizz to quiz

        res.status(200).json(quiz)
    } catch (error) {
        console.error("Error creating quiz:", error);
        res.status(500).json({ message: "Error in creating quizz", error })
    }
}

const updateQuizz = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);

        const quizzExists = await quizz.findOne({ _id: id })
        if (!quizzExists) {
            res.status(404).json({ message: "Quizz not found" })
        }

        const update = await quizz.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).json(update);

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error in updating quizz", error })
    }
}

const deleteOneQuizz = async (req, res)=>{
    try{
      const {id} = req.params ;
      const quizzExists = await quizz.findOne({_id :id});

      if(!quizzExists){
        res.status(404).json({message:"Quizz not found to delete"})
      }

      const deleteOne = await quizz.findByIdAndDelete(id);
      res.status(200).json(deleteOne);

    }catch(error){
        res.status(500).json({message : "error in deleting Quizz"})
    }
}

module.exports = { getQuiz, createQuizz, updateQuizz, deleteOneQuizz };
