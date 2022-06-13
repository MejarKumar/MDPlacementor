const mongoose = require("mongoose");
var schema = mongoose.Schema;

var PlacementCompanySchema = new schema({
    company_name: {
        type: String,
        required: true
    },
    logo: {
        type: String
    },
    role: {
        type: String,
        // required:true
    },
    selected_students: {
        type: Number,
        required: true
    },
    eligible_branch: {
        type: String
    },
    year: {
        type: Number
    },
    CGPA: {
        type: String
    },
    takeaways: {
        type: String
    },
    selection_process: {
        step1: {
            type: String
        },
        step2: {
            type: String
        },
        step3: {
            type: String
        }
    },
    interview_round: {
        round1: {
            type: String
        },
        round2: {
            type: String
        },
        round3: {
            type: String
        },
        round4: {
            type: String
        }
    },
    influence_of: {
        projects: {
            type: String
        },
        PORs: {
            type: String
        }
    },
    test_series: {
        type: String
    }


});

module.exports = mongoose.model("PlacementCompany", PlacementCompanySchema);
