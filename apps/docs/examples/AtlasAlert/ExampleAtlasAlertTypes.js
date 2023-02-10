import React from "react";
import { AtlasAlert } from "@productplan/atlas";

<<<<<<< Updated upstream
/** Alert Types */
export default function ExampleAtlasAlertTypes() {
  return (
    <div style={{border: '2px solid var(--a-color-light-gray-100)', width: '548px', borderRadius: '4px'}}>
    <div style={{margin:'4px'}}>
=======

/** Alert Types */
export default function ExampleAtlasAlert() {
  return (
    <div style={{width: '548px'}}>
    <div style={{marginBottom:'4px'}}>
>>>>>>> Stashed changes
        <AtlasAlert
          content="This is a default alert."
          icon={<i className="fas fa-circle-info"></i>}
        />
      </div>
<<<<<<< Updated upstream
      <div style={{margin:'0px 4px 4px 4px'}}>
=======
      <div style={{marginBottom:'4px'}}>
>>>>>>> Stashed changes
        <AtlasAlert
          content="This is an information alert."
          icon={<i className="fas fa-circle-info"></i>}
          type="information"
        />
      </div>  

<<<<<<< Updated upstream
      <div style={{margin:'0px 4px 4px 4px'}}> 
=======
      <div style={{marginBottom:'4px'}}> 
>>>>>>> Stashed changes
        <AtlasAlert
          content="This is a success alert."
          icon={<i className="fas fa-circle-check"></i>}
          type="success"
        />
      </div>
<<<<<<< Updated upstream
      <div style={{margin:'0px 4px 4px 4px'}}>
=======
      <div style={{marginBottom:'4px'}}>
>>>>>>> Stashed changes
        <AtlasAlert
          content="This is a warning alert."
          icon={<i className="fas fa-fish-fins"></i>}
          type="warning"
        />
      {/* TODO -- wrong icon!!  */}
      </div>
<<<<<<< Updated upstream
      <div style={{margin:'0px 4px 4px 4px'}}>
=======
      <div>
>>>>>>> Stashed changes
        <AtlasAlert
          content="This is a danger alert."
          icon={<i className="fas fa-triangle-exclamation"></i>}
          type="danger"
        />
      </div>
    </div>
  )
  
}
