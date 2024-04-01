import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const ChessBoard = () => {
  // Calculate the dimensions of the chessboard squares based on screen width
  const screenWidth = Dimensions.get('window').width;
  const squareSize = screenWidth / 8; // Adjust the size of each square

  // Function to render a single square with alternating colors
  const renderSquare = (index) => {
    // Determine if the square should be light or dark based on its position
    const isLight = (index + Math.floor(index / 8)) % 2 === 0;
    // Assign background color accordingly
    const backgroundColor = isLight ? '#FFFFFF' : '#000000';

    return <View key={index} style={[styles.square, { backgroundColor, width: squareSize, height: squareSize }]} />;
  };

  // Generate the chessboard grid
  const renderChessBoard = () => {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(renderSquare(i));
    }
    return squares;
  };

  return <View style={styles.container}>{renderChessBoard()}</View>; // Updated container style
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    aspectRatio: 1, // Ensure the chessboard is square-shaped
    paddingTop: 50, // Add padding to shift the chessboard down
  },
  square: {
    aspectRatio: 1, // Ensure squares are always square-shaped
  },
});

export default ChessBoard;
