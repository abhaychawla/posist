var mongoose = require('mongoose');

//Create a schema
var nodeSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  data: {
    type: String
  },
  nodeNumber: {
    type: mongoose.Schema.ObjectId
  },
  nodeId: {
      type: String,
  },
  referenceNodeId: {
    type: String
  },
  childReferenceNodeId: {
    type: String
  }, 
  genesisReferenceNodeId: {
    type: String
  },
  hashValue: {
    type: String
  }
});

//Create a model
var Node = mongoose.model('Node', nodeSchema);

module.exports = Node;
