const axios = require('axios');
const qs = require('qs');

const client_id = 'd6d74f88-8ef3-4735-a333-248e27add778'
const client_secret = '.WtoceV8j-aq_4hDk7XU_ESY~WaJT9k3H4'
const resource = 'https://justasimpletestok.crm.dynamics.com'
const api_url = 'https://justasimpletestok.api.crm.dynamics.com'
const url_id = 'f9e9fb2d-cef8-410a-ac40-0d17865159d6'

module.exports = async function(context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

// ============================

    function login(params) {

        var data = qs.stringify({
            'resource': resource,
            'client_id': client_id,
            'client_secret': client_secret,
            'grant_type': 'password',
            'username': params.secretdebug ? 'userone@justasimpletestok.onmicrosoft.com' : params.username, // 'userone@justasimpletestok.onmicrosoft.com'
            'password': params.secretdebug ? 'SDFjpioz234238nzj' : params.password // 'SDFjpioz234238nzj'
        });
        var config = {
            method: 'post',
            url: 'https://login.microsoftonline.com/' + url_id + '/oauth2/token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        //const response = await axios(config)
        return axios(config)
            .then(function(res) {
                context.log('login res: ', res)
                if (res && res.data) return res.data
                return 'empty login response'
            })
            .catch(function(err) {
                context.log('errX: ', err)
                return err
            })

        return "shouldn't reach here"
    }
// ============================

    function getquestions(params) {

        var data = qs.stringify({});
        var config = {
            method: 'get',
            url: api_url + '/api/data/v9.1/new_fsc_questions?$select=new_type,new_order,new_answertype,new_answerdata,new_questiontext,new_id',
            headers: { 'Authorization': 'Bearer ' + params.access_token },
            // data : data
        };

        return axios(config)
            .then(function(res) {
                context.log('getquestions axios res: ', res)
                if (res && res.data) return res.data
                return 'no data in getquestions response'
            })
            .catch(function(err) {
                context.log('errX: ', err)
                return err
            })

        return "shouldn't reach here"
    }
// ============================

    function getcbcomments(params) {

        //var data = qs.stringify({});
        var url = api_url + '/api/data/v9.1/new_cbcommentandflags';
        if (params.id) url += '(' + params.id + ')'
        url += '?$select=new_cbcommentandflagid,new_name,new_autoflag,new_manualflag,_new_cborganization_value,new_cbcomment'

        var config = {
            method: 'get',
            url: url,
            headers: { 'Authorization': 'Bearer ' + params.access_token },
            // data : data
        };

        return axios(config)
            .then(function(res) {
                context.log('getcbcomments axios res: ', res)
                if (res && res.data) return res.data
                return 'no data in getcbcomments response'
            })
            .catch(function(err) {
                context.log('errX: ', err)
                return err
            })

        return "shouldn't reach here"
    }
// ============================

    function getdecisiontrees(params) {

        //var data = qs.stringify({});
        var url = api_url + '/api/data/v9.1/new_fsc_decision_trees';
        if (params.id) url += '(' + params.id + ')'
        url += '?$select=new_fsc_decision_treeid,_new_organization_value,new_name,new_data,_new_cbcommentandflag_value'

        var config = {
            method: 'get',
            url: url,
            headers: { 'Authorization': 'Bearer ' + params.access_token },
            // data : data
        };

        return axios(config)
            .then(function(res) {
                context.log('getdecisiontrees axios res: ', res)
                if (res && res.data) return res.data
                return 'no data in getdecisiontrees response'
            })
            .catch(function(err) {
                context.log('errX: ', err)
                return err
            })

        return "shouldn't reach here"
    }
// ============================

    function getinputtoreqs(params) {

        //var data = qs.stringify({});
        var url = api_url + '/api/data/v9.1/new_fsc_inputtoreqs';
        if (params.id) url += '(' + params.id + ')'
        url += '?$select=new_name,_new_organization_value,_new_req4scen_value,_new_cbcomment_value,new_inputtext,new_fsc_inputtoreqid'

        var config = {
            method: 'get',
            url: url,
            headers: { 'Authorization': 'Bearer ' + params.access_token },
            // data : data
        };

        return axios(config)
            .then(function(res) {
                context.log('getinputtoreqs axios res: ', res)
                if (res && res.data) return res.data
                return 'no data in getinputtoreqs response'
            })
            .catch(function(err) {
                context.log('errX: ', err)
                return err
            })

        return "shouldn't reach here"
    }
// ============================

    function updatecbcomment(params) {

        //var data = qs.stringify({});
        var url = api_url + '/api/data/v9.1/new_cbcommentandflags(' + params.id + ')'
        var data = JSON.stringify(params.commentupdate);

        var config = {
            method: 'patch',
            url: url,
            headers: { 'Authorization': 'Bearer ' + params.access_token, 'Content-Type':'application/json'},
            data : data
        };

        return axios(config)
            .then(function(res) {
                context.log('updatecbcomment axios res: ', res)
                if (res && res.data) return res.data
                return 'no data in updatecbcomment response'
            })
            .catch(function(err) {
                context.log('errX: ', err)
                return err
            })

        return "shouldn't reach here"
    }
// ============================

    const command = req.body.command
    const params = req.body.params
    context.log('command: ', command)
    context.log('params: ', params)

    if (command) {

        try {

            if (command == 'login') {
                return login(params)
                    .then(function(res) {
                        context.res = {
                            status: 200,
                            body: res
                        }
                        context.done();
                    })
                    .catch(function(err) {
                        context.log('catched error: ', err);
                        context.res = {
                            status: 400,
                            body: err
                        }
                    })
            } else if (command == 'getquestions') {
                
                /*return login({secretdebug:true})
                    .then(function(res) {
                        context.log('login returned: ', res);
                        if (res.access_token) {
                            params.access_token = res.access_token
                            return getquestions(params)
                        }
                    })*/
                    return getquestions(params)
                    .then(function(res) {
                        context.res = {
                            status: 200,
                            body: res
                        }
                        context.done();
                    })
                    .catch(function(err) {
                        context.log('catched error: ', err);
                        context.res = {
                            status: 400,
                            body: err
                        }
                    })
            } else if (command == 'getcbcomments') {

                    return getcbcomments(params)
                    .then(function(res) {
                        context.res = {
                            status: 200,
                            body: res
                        }
                        context.done();
                    })
                    .catch(function(err) {
                        context.log('catched error: ', err);
                        context.res = {
                            status: 400,
                            body: err
                        }
                    })
            } else if (command == 'getdecisiontrees') {

                    return getdecisiontrees(params)
                    .then(function(res) {
                        context.res = {
                            status: 200,
                            body: res
                        }
                        context.done();
                    })
                    .catch(function(err) {
                        context.log('catched error: ', err);
                        context.res = {
                            status: 400,
                            body: err
                        }
                    })
            } else if (command == 'getinputtoreqs') {

                    return getinputtoreqs(params)
                    .then(function(res) {
                        context.res = {
                            status: 200,
                            body: res
                        }
                        context.done();
                    })
                    .catch(function(err) {
                        context.log('catched error: ', err);
                        context.res = {
                            status: 400,
                            body: err
                        }
                    })
            } else if (command == 'updatecbcomment') {

                    return updatecbcomment(params)
                    .then(function(res) {
                        context.res = {
                            status: 200,
                            body: res
                        }
                        context.done();
                    })
                    .catch(function(err) {
                        context.log('catched error: ', err);
                        context.res = {
                            status: 400,
                            body: err
                        }
                    })
            } else if (command == 'ping') {
                context.res = {
                    status: 200,
                    body: 'pong'
                }
                context.done();
            }

            context.res = {
                status: 400,
                body: "unrecognized command!" // response.data
            }
            context.done();

        } catch (err) {

            context.log('error: ', err);
        }

        context.res = {
            status: 200,
            body: 'empty response'
        };
    } else {
        context.res = {
            status: 400,
            body: "Please pass some 'command' in request body"
        };
    }
};