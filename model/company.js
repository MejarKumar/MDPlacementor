// const mongoose = require("mongoose");
// var schema = mongoose.Schema;

// var CompanySchema = new schema({
//     name:{
//         type: String,
//     },
//     // logo:{
//     //     type:String
//     // },
//     selected_students:{
//         type: Number,
//         required:true
//     },
//     description:{
//         type:String
//     },
//     year:{
//         type:Number
//     }
    

// });

// module.exports = mongoose.model("Company",CompanySchema);


const mongoose = require("mongoose");
var schema = mongoose.Schema;

var CompanySchema = new schema({
    company_name:{
        type: String,
        required:true
    },
    logo:{
        type:String
    },
    selected_students:{
        type: Number,
        required:true
    },
    eligible_branch:{
        type:String
    },
    year:{
        type:Number
    },
    CGPA:{
        type:String
    },
    takeaways:{
        type:String
    },
    selection_process:{
        step1:{
            type:String
        },
        step2:{
            type:String
        },
        step3:{
            type:String
        }
    },
    interview_round:{
        technical_round:{
            type:String
        },
        HR_round:{
            type:String
        }
    },
    influence_of:{
        projects:{
            type:String
        },
        PORs:{
            type:String
        }
    },
    test_series:{
        type:String
    }
    

});

module.exports = mongoose.model("Company",CompanySchema);
