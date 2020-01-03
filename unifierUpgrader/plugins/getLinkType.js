'use strict';

const _ = require('lodash');
const URL = require('url');

const urlUtils = require('beam-uri');

const SOCIAL_SERVICES_DOMAIN = [
    "12seconds.tv", "4travel.jp", "advogato.org", "ameba.jp", "anobii.com", "asmallworld.net", "backtype.com", "badoo.com", "bebo.com", "bigadda.com", "bigtent.com", "biip.no", "blackplanet.com", "blog.seesaa.jp", "blogspot.com", "blogster.com", "blomotion.jp", "bolt.com", "brightkite.com", "buzznet.com", "cafemom.com", "care2.com", "classmates.com", "cloob.com", "collegeblender.com", "cyworld.co.kr", "cyworld.com.cn", "dailymotion.com", "delicious.com", "deviantart.com", "digg.com", "diigo.com", "disqus.com", "draugiem.lv", "facebook.com", "faceparty.com", "fc2.com", "flickr.com", "flixster.com", "fotolog.com", "foursquare.com", "friendfeed.com", "friendsreunited.com", "friendster.com", "fubar.com", "gaiaonline.com", "geni.com", "goodreads.com", "grono.net", "habbo.com", "hatena.ne.jp", "hi5.com", "hotnews.infoseek.co.jp", "hyves.nlibibo.comidenti.ca", "imeem.com", "intensedebate.com", "irc-galleria.net", "iwiw.hu", "jaiku.com", "jp.myspace.com", "kaixin001.com", "kaixin002.com", "kakaku.com", "kanshin.com", "kozocom.com", "last.fm", "linkedin.com", "livejournal.com", "matome.naver.jp", "me2day.net", "meetup.com", "mister-wong.com", "mixi.jp", "mixx.com", "mouthshut.com", "multiply.com", "myheritage.com", "mylife.com", "myspace.com", "myyearbook.com", "nasza-klasa.pl", "netlog.com", "nettby.no", "netvibes.com", "nicovideo.jp", "ning.com", "odnoklassniki.ru", "orkut.com", "pakila.jp", "photobucket.com", "pinterest.com", "plaxo.com", "plurk.com", "plus.google.com", "reddit.com", "renren.com", "skyrock.com", "slideshare.net", "smcb.jp", "smugmug.com", "sonico.com", "studivz.net", "stumbleupon.com", "t.163.com", "t.co", "t.hexun.com", "t.ifeng.com", "t.people.com.cn", "t.qq.com", "t.sina.com.cn", "t.sohu.com", "tabelog.com", "tagged.com", "taringa.net", "thefancy.com", "tripit.com", "trombi.com", "trytrend.jp", "tuenti.com", "tumblr.com", "twine.com", "twitter.com", "uhuru.jp", "viadeo.comvimeo.com", "vk.com", "vox.com", "wayn.com", "weibo.com", "weourfamily.com", "wer-kennt-wen.de", "wordpress.com", "xanga.com", "xing.com", "yammer.com", "yaplog.jp", "yelp.com", "youku.com", "youtube.com", "yozm.daum.net", "yuku.com", "zooomr.com", "soundcloud.com", "vevo.com"
].map(item => item.toLowerCase().trim());

// When domain does not help, but we want to check for specific sub
// domain, add info here.
const SOCIAL_SERVICES_SUB_DOMAINS = {
    "amazon.com": "corp.amazon.com",
};

const MESSAGING_SERVICES = [
    "blackberry messenger", "blackberry", "aim", "xmpp", "ebuddy", "imessage", "facebook messenger", "windows live messenger", "yahoo messenger", "qq", "ibm sametime", "sametime", "skype", "mxit", "xfire", "gadu-gadu", "gadu gadu", "icq", "paltalk", "imvu", "gitter", "google hangouts", "hangouts", "hipChat", "meebo", "slack", "streamup", "talkomatic", "yinychat", "yokbox", "xfire",
].map(item => item.toLowerCase().trim());

const TWITTER_USERNAME_REGEX = /(^|[^@\w])@(\w{1,15})\b/;

/**
 * @function getLinkType
 * @description Identify if the link is for a social website
 *
 * @param {String}  source the link URI we wish to examine
 * @returns {String}
 */
function getLinkType(source, service) {

    if (!source || typeof (source) !== "string") {
        return null;
    }

    if (service && MESSAGING_SERVICES.includes(service.toLowerCase().trim())) {
        return "messaging";
    }

    source = source.replace(/\s\s+/g, "").trim().toLowerCase();
    // Check if the source is a twitter username

    if (TWITTER_USERNAME_REGEX.test(source)) {
        source = `http://twitter.com/${source.replace('@', '')}`;
    }
    // Check if the url passed does not contain http://
    if (URL.parse(source).protocol === null) {
        source = "http://" + source;
    }

    const domain = urlUtils.getDomain(source) || source;
    if (SOCIAL_SERVICES_DOMAIN.includes(domain.toLowerCase().trim())) {
        return "social";
    } else {
        const subDomain = SOCIAL_SERVICES_SUB_DOMAINS[domain];
        if (source.includes(subDomain)) {
            return "social";
        }
        return "website";
    }
}

module.exports = getLinkType;
