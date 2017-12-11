function countTopics(content) {
	return content.reduce((acc, curr) => {
		let exists = acc.findIndex((topic) => {
			return topic.label === curr.contentId.related_topic.name;
		});
		if (exists !== -1) {
			acc[exists].range ++;
		} else {
			acc.push({
				label: curr.contentId.related_topic.name,
				range: 1
			})
		}
		return acc;
	}, []);
};

function countSites(content) {
	return content.reduce((acc, curr) => {
		let exists = acc.findIndex((site) => {
			return site.label === curr.contentId.site;
		});
		if (exists !== -1) {
			acc[exists].range ++;
		} else {
			acc.push({
				label: curr.contentId.site,
				range: 1
			})
		}
		return acc;
	}, []);
};

function countTime(content) {
	let timeSpent = 0;
	content.forEach((c) => {
		timeSpent += c.time;
	});
	return timeSpent;
};

// Error handling

export const normalizeResponseErrors = res => {
    if (!res.ok) {
        if (
            res.headers.has('content-type') &&
            res.headers.get('content-type').startsWith('application/json')
        ) {
            return res.json().then(err => Promise.reject(err));
        }
        return Promise.reject({
            code: res.status,
            message: res.statusText
        });
    }
    return res;
};

export {countTopics, countSites, countTime};