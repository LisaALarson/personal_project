module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            },
            teacherNewQuizController: {
                src: 'client/scripts/controllers/TeacherNewQuizController.js',
                dest: 'server/public/assets/scripts/controllers/TeacherNewQuizController.min.js'
            },
            teacherHomeController: {
                src: 'client/scripts/controllers/TeacherHomeController.js',
                dest: 'server/public/assets/scripts/controllers/TeacherHomeController.min.js'
            },
            studentHomController: {
                src: 'client/scripts/controllers/StudentHomeController.js',
                dest: 'server/public/assets/scripts/controllers/StudentHomeController.min.js'
            },
            studentJoinGameController: {
                src: 'client/scripts/controllers/StudentJoinGameController.js',
                dest: 'server/public/assets/scripts/controllers/StudentJoinGameController.min.js'
            },
            studentPlayGameController: {
                src: 'client/scripts/controllers/StudentPlayGameController.js',
                dest: 'server/public/assets/scripts/controllers/StudentPlayGameController.min.js'
            },
            studentGameController: {
                src: 'client/scripts/controllers/StudentGameController.js',
                dest: 'server/public/assets/scripts/controllers/StudentGameController.min.js'
            },
            LoginController: {
                src: 'client/scripts/controllers/LoginController.js',
                dest: 'server/public/assets/scripts/controllers/LoginController.min.js'
            },
            TeacherRegisterController: {
                src: 'client/scripts/controllers/TeacherRegisterController.js',
                dest: 'server/public/assets/scripts/controllers/TeacherRegisterController.min.js'
            },
            StudentRegisterController: {
                src: 'client/scripts/controllers/StudentRegisterController.js',
                dest: 'server/public/assets/scripts/controllers/StudentRegisterController.min.js'
            }
        },
        copy: {
            html: {
                expand: true,
                cwd: 'client',
                src: [
                    "views/index.html"
                ],
                "dest": "server/public"
            },
            htmlRoutes: {
                expand: true,
                cwd: 'client',
                src: [
                    "views/routes/tHome.html",
                    "views/routes/tNewQuiz.html",
                    "views/routes/sHome.html",
                    "views/routes/sJoinGame.html",
                    "views/routes/sPlayGame.html",
                    "views/routes/sGame.html",
                    "views/routes/login.html",
                    "views/routes/tRegister.html",
                    "views/routes/sRegister.html"
                ],
                "dest": "server/public"
            },
            angular: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular/angular.js"
                ],
                "dest": "server/public/vendors/"
            },
            angularRoute: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular-route/angular-route.min.js",
                    "angular-route/angular-route.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            bootstrap: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "bootstrap/dist/css/bootstrap.min.css"
                ],
                "dest": "server/public/vendors/"
            },
            style: {
                expand: true,
                cwd: 'client',
                src: [
                    "styles/style.css"
                ],
                "dest": "server/public/assets"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};