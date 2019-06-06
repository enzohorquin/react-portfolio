module.exports = [
    {
         path: '/email/send',
         entity: 'email',
         method: 'send',
         type: 'post',
         auth: false,
         input: {
             params: {},
             body: {
                 name: {
                     type: 'string',
                     required: true
                 },
                 email : {
                     type: 'string',
                     required: true
                 },
                 subject : {
                     type: 'string',
                     required: true
                 }, 
                 message: {
                    type: 'string',
                    required: true
                }
                
             }
         }
     },
     {
        path: '/homepage/index-two-col-data',
        entity: 'homepage',
        method: 'get',
        type: 'get',
        auth: false,
        input: {
            params: {},
            body: {}
        }
    },
    {
        path: '/projects/projects-two-col-data',
        entity: 'projects',
        method: 'get',
        type: 'get',
        auth: false,
        input: {
            params: {},
            body: {}
        }
    },
    {
        path: '/skills/skills-data',
        entity: 'skills',
        method: 'get',
        type: 'get',
        auth: false,
        input: {
            params: {},
            body: {}
        }
    },
    {
        path: '/workhistory/work-hist-two-col-data',
        entity: 'workhistory',
        method: 'get',
        type: 'get',
        auth: false,
        input: {
            params: {},
            body: {}
        }
    }

 ];