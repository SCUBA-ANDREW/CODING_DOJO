function isValidWalk(walk) {
    var n_cnt = 0;
  var w_cnt = 0;
    for(var i=0; i<walk.length;i++){
        if(walk[i]=='n'){
          n_cnt++;
        }
        else if(walk[i]=='s'){
          n_cnt--;
        }
        else if(walk[i]=='w'){
          w_cnt++;
        }
        else if(walk[i]=='e'){
          w_cnt--;
        }
      }
    
    if(walk.length === 10&&n_cnt==0&&w_cnt==0){
    //   return('true');
      console.log("true")
    }else{
    //   return("false");
        console.log("false")
    }
  }


//   isValidWalk(['n','s','n','s','n','s','n','s','n','s']);
//   isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']);
//   isValidWalk(['w']);
//   isValidWalk(['n','n','n','s','n','s','n','s','n','s'])



  describe("Tests", () => {
    it("test", () => {
  //some test cases for you...
  Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
  Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
  Test.expect(!isValidWalk(['w']), 'should return false');
  Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
  
    });
  });