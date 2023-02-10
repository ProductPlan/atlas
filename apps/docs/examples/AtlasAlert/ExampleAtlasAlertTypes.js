import React from "react";
import { AtlasAlert } from "@productplan/atlas";


/** Alert Types */
export default function ExampleAtlasAlert() {
  return (
    <div style={{width: '548px'}}>
    <div style={{marginBottom:'4px'}}>
        <AtlasAlert
          content="This is a default alert."
          icon={<i className="fas fa-circle-info"></i>}
        />
      </div>
      <div style={{marginBottom:'4px'}}>
        <AtlasAlert
          content="This is an information alert."
          icon={<i className="fas fa-circle-info"></i>}
          type="information"
        />
      </div>  

      <div style={{marginBottom:'4px'}}> 
        <AtlasAlert
          content="This is a success alert."
          icon={<i className="fas fa-circle-check"></i>}
          type="success"
        />
      </div>
      <div style={{marginBottom:'4px'}}>
        <AtlasAlert
          content="This is a warning alert."
          icon={<i className="fas fa-fish-fins"></i>}
          type="warning"
        />
      {/* TODO -- wrong icon!!  */}
      </div>
      <div>
        <AtlasAlert
          content="This is a danger alert."
          icon={<i className="fas fa-triangle-exclamation"></i>}
          type="danger"
        />
      </div>
    </div>
  )
  
}
