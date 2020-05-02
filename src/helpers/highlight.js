import React from "react"

function escapeRegExpChars(text) {
	return text.replace(/([.*+?^=!:${}()|\\[\\])/g, '\\$1')
}

export default function highlight(text, query) {
	let lastIndex = 0
	const words = query
		.split(/\s+/)
		.filter(word => word.length > 0)
		.map(escapeRegExpChars)
	if (words.length === 0) {
		return [text]
	}
	const regexp = new RegExp(words.join('|'), 'gi')
	const tokens = []
	while (true) {
		const match = regexp.exec(text)
		if (!match) {
			break
		}
		const length = match[0].length
		const before = text.slice(lastIndex, regexp.lastIndex - length)
		if (before.length > 0) {
			tokens.push(before)
		}
		lastIndex = regexp.lastIndex
		tokens.push(
			<strong key={lastIndex} className="text-green-400">
				{match[0]}
			</strong>
		)
	}
	const rest = text.slice(lastIndex)
	if (rest.length > 0) {
		tokens.push(rest)
	}
	return tokens
}
