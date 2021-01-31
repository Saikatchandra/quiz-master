export const score = current_score => {
  return {
      type: 'SCORE',
      payload: current_score
  }
}