(function(window) {

    // region 常量定义
    /**
     * Keys for APP
     */
    window.KEY_CODE_VERSION = '1';
    window.KEY_DEBUG = false;
    window.KEY_BYPASS = true;
    window.KEY_PAGE_ROOT = 'root';
    window.KEY_APP_NAME = 'FES';
    window.KEY_MSG_VERSION = '2020-06-30';
    window.KEY_MSG_SID = '47abd446b3bada4bb29a0c1cf38e23b2';
    window.KEY_MSG_TOKEN = '859f8236e46616d80381c8d1e51c71fd';
    window.KEY_MSG_APPID = '1dcb0de4f0914a29be9b4101bbb410c6';
    window.KEY_MSG_TID = 39178;

    /**
     * Keys for API verification
     */
    window.KEY_ACCESS_CODE = 'KEY_ACCESS_CODE';
    window.KEY_TOKEN = 'KEY_TOKEN';
    window.KEY_LOGIN_USER = 'KEY_LOGIN_USER';
    window.KEY_GUESS_ID = 'KEY_GUESS_ID';
    window.KEY_ADDRESS = 'KEY_ADDRESS';
    window.KEY_LANGUAGE = 'KEY_LANGUAGE';
    window.KEY_WALLET_INFO = 'KEY_WALLET_INFO';
    window.VAL_ACCESS_CODE = '6rafVDJZYe9frJuJQ7BB';
    window.VAL_SALT = '~FES~';
    window.KEY_LOGIN_TOKEN = 'KEY_LOGIN_TOKEN';
    window.KEY_VERSION = 'KEY_VERSION';
    window.KEY_MUSIC = 'KEY_MUSIC';
    window.KEY_GLOBAL_SETTING = 'KEY_GLOBAL_SETTING';

    // endregion

    /******************************************************
     ***************** API functions *******************
     ******************************************************/

    /**
     * Keys for status of http response
     */
    window.KEY_STATUS_SUCCESS = 200;
    window.KEY_STATUS_ACCESS = 201;
    window.KEY_STATUS_EROROR = 203;
    window.KEY_STATUS_TIMEOUT = 10002;
    window.KEY_STATUS_FROZEN = 205;


    // region API functions
//    window.BASE_URL = 'http://192.168.10.70:8099/'; //测试服
    // window.BASE_URL = 'http://192.168.0.120:8099/'; //测试服
    // window.BASE_URL = 'https://api.fes5.net/'; //正式服
    window.BASE_URL = 'https://api.fes5.net/test/'; //测试服

    window.URL_HELPER = 'https://five-elements.io/%e9%bb%84%e9%87%91/'; // 帮助中心
    window.URL_GUIDE = 'https://five-elements.io/rules/'; // 游戏介绍
    window.URL_DOWNLOAD = 'https://five-elements.io/%e4%b8%8b%e8%bd%bd%e4%b8%ad%e5%bf%83/'; // 下载方式
    window.URL_ABOUT = 'https://five-elements.io/about-fes/'; // 版本
    window.URL_PROTOCOL = 'https://five-elements.io/'; // 用户协议
    window.URL_DECLARE = 'https://five-elements.io/'; // 免责声明
    window.URL_SAFETY = 'https://five-elements.io/'; // 安全原则
    window.URL_ADS = 'https://fes-dapp.oss-ap-southeast-1.aliyuncs.com/ads.png'; // 广告图片链接
    window.URL_CONTACT = 'https://five-elements.io/contacts/'; // 广告图片链接


    var FUN_REGISTER = 'user/register'; //注册
    var FUN_LOGIN = 'user/login'; // 登录
    var FUN_FORGOT_PASSWORD = 'user/forgotPassword'; //忘记密码
    var FUN_UPDATE_PASSWORD = 'user/updatePassword'; //重置密码
    var FUN_INFO = 'user/info'; //用户信息
    var FUN_WALLET_ACCOUNT = 'wallet/account'; //用户信息
    var FUN_WALLET_LOG = 'wallet/walletLog/list'; //钱包日志列表
    var FUN_CURRENT_ROUND = 'guess/currentRound'; //忘记密码
    var FUN_JOIN_GUESS = 'guess/joinGuess'; //竞标
    var FUN_RANKING = 'guess/ranking'; //排名
    var FUN_AVERAGE_RANKING = 'guess/averageRanking'; //排名
    var FUN_GUESS_LIST = 'guess/list'; //游戏记录
    var FUN_RECHARE_ADDRESS = 'address/rechargeAddress'; //设置(获取)钱包地址
    var FUN_CREATE_ADDRESS = 'address/create/withdrawAddress'; //创建提现钱包地址
    var FUN_WITHDRAW_ADDRESS = 'address/withdrawAddress'; //提现钱包地址
    var FUN_ADDRESS_IS_INTERNAL = 'address/isInternal'; //是否内部地址
    var FUN_UNLOCK_ACCOUNTB = 'wallet/unlockAccountB'; //释放账户B
    var FUN_WITHDRAWAL = 'trade/withdrawal'; //提现
    var FUN_TRADE_LIST = 'trade/list'; //充提记录
    var FUN_COIN_TYPE = 'coinType/list'; //网络通道
    var FUN_SEND_LOGIN_CODE = 'user/sendLoginCode'; //发送码库验证码
    var FUN_CODE_LIBRARY_LOGIN = 'user/codeLibraryLogin'; //码库授权登录
    var FUN_CODE_LIBRARY_UNLOCK = 'user/codeLibraryUnlock'; //码库解绑
    var FUN_SYS_ARGS = 'user/getSysArgs'; //码库授权登录
    var FUN_SEND_CODE = 'user/sendCode'; //发送验证码
    var FUN_NOTICE_LIST = 'notice/list'; //获取公告列表
    var FUN_UPDATE_INFO = 'user/updateInfo'; //更新用户信息
    var FUN_UPLOAD = 'user/upload'; //更新用户信息
    var FUN_REPLAY_GUESS_CHECK = 'guess/replayGuessCheck'; //检查用户逆盘赛资格
    var FUN_WALLET_LOG_BY_DATE = 'wallet/walletLogByDate'; //按年月日获取用户钱包记录
    var FUN_GAME_HISTORY = 'guess/gameHistory'; //游戏记录
    var FUN_GAME_RESULT = 'guess/gameResult'; //游戏结果
    var INVITATION_CODE = 'inviteCode/getMyCode'; //获取邀请码
    var GENERATE_AWARD = 'lottery/generateAward'; //抽奖
    var LOTTERY_COUNT = 'lottery/lotteryCount'; //抽奖次数
    var INIT_DRAW_LIS = 'lottery/initDrawList'; //获取奖品列表
    var PRIZE_LOG = 'lottery/prizeLog'; //获取中奖记录



    getWalletLogByDate = function() {
        return BASE_URL + FUN_WALLET_LOG_BY_DATE
    }
    getGameHistory = function() {
        return BASE_URL + FUN_GAME_HISTORY
    }
    getGameResult = function() {
        return BASE_URL + FUN_GAME_RESULT
    }
    getRegister = function() {
        return BASE_URL + FUN_REGISTER
    }
    getUpload = function() {
        return BASE_URL + FUN_UPLOAD
    }
    getUpdateInfo = function() {
        return BASE_URL + FUN_UPDATE_INFO
    }
    getLogin = function() {

        return BASE_URL + FUN_LOGIN;
    }
    getCurrentRound = function() {
        return BASE_URL + FUN_CURRENT_ROUND;
    }
    getForgotPassword = function() {
        return BASE_URL + FUN_FORGOT_PASSWORD;
    }
    getUpdatePassword = function() {
        return BASE_URL + FUN_UPDATE_PASSWORD;
    }
    getWalletAccount = function() {
        return BASE_URL + FUN_WALLET_ACCOUNT;
    }
    getJoinGuess = function() {
        return BASE_URL + FUN_JOIN_GUESS;
    }
    getRanking = function() {
        return BASE_URL + FUN_RANKING;
    }
    getAverageRanking = function() {
        return BASE_URL + FUN_AVERAGE_RANKING;
    }
    getGuessList = function() {
        return BASE_URL + FUN_GUESS_LIST;
    }
    getAddressList = function() {
        return BASE_URL + FUN_WITHDRAW_ADDRESS;
    }
    getCreateAddress = function() {
        return BASE_URL + FUN_CREATE_ADDRESS;
    }
    getCoinType = function() {
        return BASE_URL + FUN_COIN_TYPE;
    }
    getUnlock = function() {
        return BASE_URL + FUN_UNLOCK_ACCOUNTB;
    }
    getWithdrawal = function() {
        return BASE_URL + FUN_WITHDRAWAL;
    }
    getTradeList = function() {
        return BASE_URL + FUN_TRADE_LIST;
    }
    getRechageAddress = function() {
        return BASE_URL + FUN_RECHARE_ADDRESS;
    }
    getWalletLog = function() {
        return BASE_URL + FUN_WALLET_LOG;
    }
    getSendLoginCode = function() {
        return BASE_URL + FUN_SEND_LOGIN_CODE;
    }
    getCodeLibraryLogin = function() {
        return BASE_URL + FUN_CODE_LIBRARY_LOGIN;
    }
    getCodeLibraryUnlock = function() {
        return BASE_URL + FUN_CODE_LIBRARY_UNLOCK;
    }
    getSysArgs = function() {
        return BASE_URL + FUN_SYS_ARGS;
    }
    getUserInfo = function() {
        return BASE_URL + FUN_INFO;
    }
    getSendCode = function() {
        return BASE_URL + FUN_SEND_CODE;
    }
    getNoticeList = function() {
        return BASE_URL + FUN_NOTICE_LIST;
    }
    getReplayGuessCheck = function() {
        return BASE_URL + FUN_REPLAY_GUESS_CHECK;
    }
    getAddressIsInternal = function() {
        return BASE_URL + FUN_ADDRESS_IS_INTERNAL;
    }
    getAddressIsInternal = function() {
        return BASE_URL + FUN_ADDRESS_IS_INTERNAL;
    }
    getInvitationCode = function() {
        return BASE_URL + INVITATION_CODE;
    }
    generateAward = function() {
        return BASE_URL + GENERATE_AWARD;
    }
    lotteryCount = function() {
        return BASE_URL + LOTTERY_COUNT;
    }
    initDrawLis = function() {
        return BASE_URL + INIT_DRAW_LIS;
    }
    prizeLog = function() {
        return BASE_URL + PRIZE_LOG;
    }


    // endregion
    /******************************************************
     ***************** Common functions *******************
     ******************************************************/

    getToken = function(timestamp) {
        return $.md5(VAL_ACCESS_CODE + timestamp);
    }

    POST = function(url, data, callback, failcallback = function(err) { log(err); }) {
        log(url);
        log(data);
        // api.showProgress({
        //     title: i18n.t('lang.loading'),
        //     text: i18n.t('lang.pleaseWait')
        // });
        var timestamp = new Date().getTime();
        var token = getToken(timestamp);
        var language = api.getPrefs({ sync: true, key: KEY_LANGUAGE });
        api.ajax({
            url: url,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'language': filterLanguage(language),
                'dappToken': token,
                'apiTimestamp': timestamp,
            },
            dataType: "json",
            data: {
                body: data
            }
        }, function(ret, err) {
            log(ret);
            // api.hideProgress();
            if (err) {
                api.toast({
                    msg: err.msg,
                    duration: 2000,
                    location: 'bottom'
                })
                failcallback(err);
            } else if (ret.success) {
                callback(ret, err);
            } else {
                if (ret.errorCode == 9020) {
                    api.openWin({
                        name: 'login',
                        url: '../login/login.html'
                    });
                } else {
                    api.toast({
                        msg: ret.errorMsg
                    })
                }
            }
        });
    }

    filterLanguage = function(language) {
        var rt = 'zh-CN';
        switch (language) {
            case 'tw':
                rt = 'zh-TW';
                break
            case 'en':
                rt = 'en-US';
                break
            default:
                rt = language
                break
        }
        return rt;
    }

    GET = function(url, data, callback) {
        // log(url);
        // log(data);
        api.ajax({
            url: url,
            method: 'get',
            dataType: "json",
            headers: {
                'language': filterLanguage(api.getPrefs({ sync: true, key: KEY_LANGUAGE }))
            },
        }, function(ret, err) {
            // log(ret);
            // log(err);
            if (ret && (ret.code == KEY_STATUS_TIMEOUT || ret.code == KEY_STATUS_FROZEN)) {
                // api.hideProgress();
                alertSingle(ret.errorMsg, function(ret) {

                });
            } else {
                callback(ret, err);
            }
        });
    }

    showMessage = function(msg, buttons, callback) {
        if (buttons == null || buttons.length == 0) {
            buttons = [i18n.t('lang.confirm')];
        }
        api.alert({
            title: KEY_APP_NAME,
            msg: msg,
            buttons: buttons
        }, callback);
    }

    alertDouble = function(msg, callback) {
        var dialogBox = api.require('dialogBox');
        dialogBox.alert({
            texts: {
                title: i18n.t('lang.alert'),
                content: msg,
                leftBtnTitle: i18n.t('lang.cancel'),
                rightBtnTitle: i18n.t('lang.confirm')
            },
            styles: {
                bg: '#202633',
                corner: 5,
                title: {
                    marginT: 20,
                    icon: 'widget://image/icon-notice1.png',
                    iconSize: 40,
                    titleColor: '#fff'
                },
                content: {
                    color: '#fff',
                    size: 14
                },
                left: {
                    marginB: 7,
                    marginL: 15,
                    color: '#a0732a',
                    corner: 2,
                    bg: '#fff',
                    size: 15,
                    w: 130,
                    h: 35,
                    border: 'solid 1px #a0732a',
                },
                right: {
                    marginB: 7,
                    marginL: 10,
                    corner: 2,
                    color: '#fff',
                    bg: '#a0732a',
                    size: 15,
                    w: 130,
                    h: 35,
                }
            }
        },
            function(ret) {
                dialogBox.close({
                    dialogName: 'alert'
                });
                if (ret.eventType == 'right') {
                    callback(ret);
                }
            });
    }

    alertSingle = function(msg, callback) {
        var dialogBox = api.require('dialogBox');
        dialogBox.alert({
            texts: {
                title: i18n.t('lang.alert'),
                content: msg,
                leftBtnTitle: i18n.t('lang.confirm'),
            },
            styles: {
                bg: '#202633',
                corner: 5,
                title: {
                    marginT: 20,
                    icon: 'widget://image/icon-notice1.png',
                    iconSize: 40,
                    titleColor: '#d1a043'
                },
                content: {
                    color: '#fff',
                    size: 14
                },
                left: {
                    marginB: 10,
                    marginL: 20,
                    w: 260, //（可选项）数字类型；左边按钮的宽；默认：130
                    h: 35,
                    color: '#FFF',
                    corner: 0,
                    bg: '#a0732a',
                    size: 15
                },
            }
        }, function(ret) {

            dialogBox.close({
                dialogName: 'alert'
            });
            if (callback != null) {
                callback(ret);
            }
        });
    }

    getGlobalConfigs = function(callback) {
        var config = $api.getStorage(KEY_GLOBAL_CONFIG);
        if (config == null) {
            api.showProgress();
            sendPostRequest(getApiGetGlobalConfigs(), {}, function(ret, err) {
                api.hideProgress();
                // log(ret);
                if (ret) {
                    if (ret.status == KEY_STATUS_SUCCESS) {
                        config = ret.data;
                        $api.setStorage(KEY_GLOBAL_CONFIG);
                    } else {
                        api.alert({
                            msg: ret.errorMsg
                        });
                    }
                } else {
                    api.alert({
                        msg: ('Code：' + err.code + '；Error：' + err.msg + 'Status：' + err.statusCode)
                    });
                }
                callback(config);
            });
        }
    }

    openUrl = function(aimurl) {
        if (api.systemType == "android") {
            api.openApp({
                iosUrl: aimurl,
                androidPkg: 'android.intent.action.VIEW',
                mimeType: 'text/html',
                uri: aimurl
            }, function(ret2, err2) {
                if (ret2) {

                } else {
                    alert('Please install the mobile browser to open');
                }
            });
        } else {
            api.openApp({
                iosUrl: aimurl,
            }, function(ret2, err2) {
                if (ret2) {

                } else {
                    alert('Open failed');
                }
            });
        }
    }

    log = function(str) {
        if (KEY_DEBUG) {
            console.log(JSON.stringify(str));
        }
    }


    //去尾法
    Number.prototype.toFloor = function(num) {
        return Math.floor(this * Math.pow(10, num)) / Math.pow(10, num);
    };

    /**
     * 格式化数字
     * @param number
     * @param decimals
     */
    formatDecimals = function(number, decimals = 2) {
        var num = new Number(number);
        return num.toFixed(decimals);
    }

    alertInputPasswordTwo = function(callback) {
        var dialogBox = api.require('dialogBox');
        dialogBox.input({
            keyboardType: 'default',
            texts: {
                title: 'BNKC',
                placeholder: '请输入交易密码',
                leftBtnTitle: '取消',
                rightBtnTitle: '确定',
            },
            styles: {
                bg: '#fff',
                corner: 2,
                w: 300,
                h: 240,
                title: {
                    h: 60,
                    alignment: 'center',
                    size: 14,
                    color: '#000',
                    marginT: 30,
                },
                input: {
                    h: 60,
                    y: 30,
                    marginT: 15,
                    marginLeft: 10,
                    marginRight: 10,
                    textSize: 14,
                    textColor: '#000'
                },
                dividingLine: {
                    width: 0.5,
                    color: '#696969'
                },
                left: {
                    bg: 'rgba(0,0,0,0)',
                    color: '#007FFF',
                    size: 12
                },
                right: {
                    bg: 'rgba(0,0,0,0)',
                    color: '#007FFF',
                    size: 12
                }
            }
        }, function(ret) {
            if (ret.eventType == 'right') {
                callback(ret.text)
                // var dialogBox = api.require('dialogBox');
                // dialogBox.close({
                //     dialogName: 'input'
                // });
            } else if (ret.eventType == 'left') {
                var dialogBox = api.require('dialogBox');
                dialogBox.close({
                    dialogName: 'input'
                });
            }
        });
    }

    // 对Date的扩展，将 Date 转化为指定格式的String
    // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
    // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
    // 例子：
    // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
    // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
    Date.prototype.format = function(fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }



    // 国际化配置
    window.i18n = new VueI18n({
        locale: 'cn',    // 语言标识
        //this.$i18n.locale // 通过切换locale的值来实现语言切换
        messages: {
            en: {//英文
                lang: EN//从其他js返回的语言包（根据项目自己手写）
            },
            cn: {//简体
                lang: CN
            },
            tw: {//繁体
                lang: TW
            },
            ja: {//日语
                lang: JP
            },
            ko: {//韩语
                lang: KO
            },
            ar: {//阿拉伯
                lang: AR
            },
            ms: {//马来
                lang: MS
            },
            tr: {//土耳其语
                lang: TR
            },
            vi: {// 越南
                lang: VN
            },
            id: {// 印尼
                lang: ID
            }
        }
    })

    /**
     * 获取用户信息
     * @returns {boolean|any}
     */
    getUser = function() {
        let user = api.getPrefs({
            sync: true,
            key: KEY_LOGIN_USER
        });
        if (user) {
            return JSON.parse(user)
        }
        return false;
    }

    getElementStr = function(category) {
        var str = i18n.t('lang.gold')
        switch (category) {
            case 0:
                str = i18n.t('lang.gold')
                break;
            case 1:
                str = i18n.t('lang.wood')
                break;
            case 2:
                str = i18n.t('lang.water')
                break;
            case 3:
                str = i18n.t('lang.fire')
                break;
            case 4:
                str = i18n.t('lang.soil')
                break;
        }
        return str;
    }

    getElementImg = function(category) {
        var images = [
            'https://fes-dapp.oss-ap-southeast-1.aliyuncs.com/gold.png',
            'https://fes-dapp.oss-ap-southeast-1.aliyuncs.com/wood.png',
            'https://fes-dapp.oss-ap-southeast-1.aliyuncs.com/water.png',
            'https://fes-dapp.oss-ap-southeast-1.aliyuncs.com/fire.png',
            'https://fes-dapp.oss-ap-southeast-1.aliyuncs.com/soil.png',
        ];
        return images[category];
    }
    getElementImgCard = function(category) {
        var images = [
            'https://fes-dapp.oss-ap-southeast-1.aliyuncs.com/gold_card.png',
            'https://fes-dapp.oss-ap-southeast-1.aliyuncs.com/wood_card.png',
            'https://fes-dapp.oss-ap-southeast-1.aliyuncs.com/water_card.png',
            'https://fes-dapp.oss-ap-southeast-1.aliyuncs.com/fire_card.png',
            'https://fes-dapp.oss-ap-southeast-1.aliyuncs.com/soil_card.png',
        ];
        return images[category];
    }

    getElementColor = function(category) {
        var colors = [
            '#ffbb38',
            '#139428',
            '#0096ff',
            '#e93315',
            '#874d22',
        ];
        return colors[category];
    }

})(window);
