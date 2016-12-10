/**
 * Created by lefeilberg on 17/11/2016.
 */
var SDK = {

    serverURL: "http://localhost:8989/api",

    request: function (options, cb) {

        $.ajax({
            url: SDK.serverURL + options.url,
            method: options.method,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(options.data),
            success: function (data, status, xhr) {
                cb(null, data, status, xhr);
            },
            error: function (xhr, status, errorThrown) {
                cb({xhr: xhr, status: status, error: errorThrown});
            }
        });
    },

    logOut:function() {
        SDK.Storage.remove("tokenId");
        SDK.Storage.remove("tokenUserType");
        SDK.Storage.remove("lectureId");
        SDK.Storage.remove("tokenCourseName");
        SDK.Storage.remove("reviewId")
    },

    Storage: {
        prefix: "CalenderSDK",
        persist: function (key, value) {
            window.localStorage.setItem(this.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
        },
        load: function (key) {
            var val = window.localStorage.getItem(this.prefix + key);
            try {
                return JSON.parse(val);
            }
            catch (e){
                return val;
            }
        },
        remove:function (key) {
            window.localStorage.removeItem(this.prefix + key);
        }
    },

    Course: {
        getCourse: function (cb) {
            SDK.request({
                method: "GET",
                url: "/course/" +
                SDK.Storage.load("tokenId")}, cb);
        }
    },

    login: function (username, password, cb) {
        this.request({
            data: {
                cbsMail: username,
                password: password
            },
            url: "/login",
            method: "POST"
        }, function (err, data) {

            if (err) return cb(err);

            SDK.Storage.persist("tokenId", data.id);
            SDK.Storage.persist("tokenUserType", data.type);

            cb(null, data);

        });
    },

    Lecture: {
        getLecture: function (cb) {
            SDK.request({
                method: "GET",
                url: "/lecture/" +
                SDK.Storage.load("tokenCourseName")}, cb)
            }
    },

    Reviews: {
        getReview: function (cb) {
            SDK.request({
                method: "GET",
                url: "/review/" +
                SDK.Storage.load("lectureId")}, cb)

        },

        createReview: function (data, cb) {
            SDK.request({
                method: "POST",
                url: "/" + SDK.Storage.load("tokenUserType") + "/review",
                data: data}, cb);
        },

        deleteReview: function (data, cb) {
            SDK.request({
                data: {
                    id: data
                },
                method: "DELETE",
                url: "/teacher/review/delete"
                }, cb);
        }
    }

};