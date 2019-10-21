const dateFormatter = (date) => {
    return date ? new Date(Date.parse(date)).toLocaleString() : "";
}

export { dateFormatter };
