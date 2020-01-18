import React from 'react'
import ItemDisplayTemplate from '../../../Templates/ItemDisplayTemplate/ItemDisplayTemplate.js';


export default function ImmersiveSoundFX() {
    
    return (
        <ItemDisplayTemplate
            site="/workexperience" 
            tableClassName=""
            
            name="Brihteja d.o.o."
          
            timeLine="April - June 2019"
            
            description={
                "This application was created using the Flutter framework." +
                " It's the first project I created with flutter or dart"
            }
            technologiesUsed={"c#, VS, .NET, MSSQL"}
            border="border"
        />
    )
}
