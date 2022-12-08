async function transaction() {
  // Start the transaction.
  const session = await ModelA.startSession();
  session.startTransaction();
  
  try {
    const options = { session };

    // Try and perform operation on Model.
    const a = await ModelA.create([{ ...args }], options);

    // If the first operation succeeds this next one will get called.
    await ModelB.create([{ ...args }], options);

    // If all succeeded with no errors, commit and end the session.
    await session.commitTransaction();
    session.endSession();
    return a;
  } catch (e) {
    // If any error occured, the whole transaction fails and throws error.
    // Undos changes that may have happened.
    await session.abortTransaction();
    session.endSession();
    throw e;
  }
}