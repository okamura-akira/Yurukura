// 参考サイト
// https://hacknote.jp/archives/15289/

var cookie = {
	/**
	 * 取得
	 * @param {string} cookieName 取得するCookieの名前
	 */
	get : function(cookieName) {
		if (!navigator.cookieEnabled) return false;

		var getCookieAllData  = document.cookie,
		    getCookieAllDatas = getCookieAllData.split(';'),
		    getCookieDatas    = {},
		    cookieKeyValue    = [],
		    cookieKey         = '',
		    cookieValue       = '';

		var hashLength = function(arr) {
			var result = 0, key = false;

			if (typeof arr !== 'object') return false;

			for (key in arr) result++;

			return result;
		};

		for (var i = 0, len = getCookieAllDatas.length; i < len; i++) {
			if (getCookieAllDatas[i] && getCookieAllDatas[i] !== '') {
				cookieKeyValue = getCookieAllDatas[i].split('=');
				cookieKey      = cookieKeyValue[0].replace(/^\s+/, '');
				cookieValue    = '';

				if (cookieKeyValue[1]) {
					cookieValue = decodeURIComponent(cookieKeyValue[1]);
				}

				getCookieDatas[cookieKey] = cookieValue;
			}
		}

		if (hashLength(getCookieDatas) > 0) {
			if (cookieName && cookieName in getCookieDatas) {
				return getCookieDatas[cookieName];
			} else {
				return getCookieDatas;
			}
		} else {
			return '';
		}
	},

	/**
	 * 設定
	 * @param {string} cookieName 設定するCookieの名前
	 * @param {string} value 設定する値
	 * @param {string} domain 有効ドメイン
	 * @param {string} path 有効パス
	 * @param {string} expires 有効期限
	 * @param {boolean} secure セキュアとするか
	 * @return {boolean} 設定に成功した場合はtrue、失敗した場合はfalseを返す
	 */
	set : function(cookieName, value, domain, path, expires, secure) {
		if (!navigator.cookieEnabled || !cookieName || !value) return false;

		var date, dt, ts, ts_after;

		var setCookieData = cookieName + '=' + encodeURIComponent(value) + ';';

		if (domain) setCookieData += 'domain=' + domain + ';';

		if (path) setCookieData += 'path=' + path + ';';

		if (expires) {
      dt = new Date();
      ts = dt.getTime();

      // 1時間後
      ts_after = ts + (1000 * 60 * 60 * expires);

      date = new Date(ts_after);
			setCookieData += 'expires=' + date.toGMTString() + ';';
		}

		if (secure && secure === true && location.protocol.match(/https/)) {
			setCookieData += 'secure';
		}

		document.cookie = setCookieData;

		return true;
	},

	/**
	 * 削除
	 * @param {string} cookieName 削除するCookieの名前
	 * @return {boolean} 削除に成功した場合はtrue、失敗した場合はfalseを返す
	 */
	del : function(cookieName) {
		if (!navigator.cookieEnabled || !cookieName) return false;

		var getCookieDatas = this.get();

		if (getCookieDatas[cookieName]) {
			var setCookieData = cookieName + '=;',
			    date          = new Date(0);

			setCookieData += 'expires=' + date.toGMTString() + '';

			document.cookie = setCookieData;

			return true;
		}

		return false;
	}
};