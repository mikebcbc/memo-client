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

export {countTopics, countSites};