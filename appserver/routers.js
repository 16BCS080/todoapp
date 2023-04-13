const todolist = require('./todolist');

module.exports = ( app ) =>{
		app.post('/insert', async ( req, res) => { 
			try{		  
			    var todoDetails = todolist.collection.insertOne({
			    	title: req.body.title,
            		desc: req.body.desc,
            		checkbox: false			    	
			    })  
				res.status(200).json({  status: 'sucess' }); 
			} catch(err) {
				throw err; 
			}		
		} )
		app.post('/delete', async ( req, res) => { 
			where = req.body ;  
			await todolist.findByIdAndDelete(where._id);
			res.json({ status: 'sucess' }); 
		} );

		app.post('/update', async ( req, res) => {  
			where = req.body ;  
			await todolist.findByIdAndUpdate( where.query._id, where.update );
			res.json({ status: 'sucess' }); 
		} )

		app.get('/', async ( req, res) => { 
		  try { 
		    const list = await todolist.find({}).exec(); 
		    res.status(200).json({ status: 'sucess' , list: list});
		  } catch(err) {
		    throw err;
		  } 
		} );
} 