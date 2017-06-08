import TelegramBot = require("node-telegram-bot-api");

const MyTelegramBot = new TelegramBot("token");

MyTelegramBot.startPolling({ foo: "bar" });
MyTelegramBot.initPolling({ foo: "bar" });
MyTelegramBot.stopPolling();
MyTelegramBot.isPolling();
MyTelegramBot.openWebHook();
MyTelegramBot.closeWebHook();
MyTelegramBot.hasOpenWebHook();
MyTelegramBot.getMe();
MyTelegramBot.setWebHook("http://typescriptlang.org", { foo: "bar" });
MyTelegramBot.deleteWebHook();
MyTelegramBot.getWebHookInfo();
MyTelegramBot.getUpdates({ foo: "bar" });
MyTelegramBot.processUpdate("Update Method/Stream/Etc");
MyTelegramBot.sendMessage(1234, "test-text", { foo: "bar" });
MyTelegramBot.answerInlineQuery("queryId", ["test", "test", "test"], { foo: "bar" });
MyTelegramBot.forwardMessage(1234, 5678, "memberID", { foo: "bar" });
MyTelegramBot.sendPhoto(1234, "photo/path", { foo: "bar" });
MyTelegramBot.sendAudio(1234, "audio/path", { foo: "bar" });
MyTelegramBot.sendDocument(1234, "doc/path", { foo: "bar" }, { fileOption: true });
MyTelegramBot.sendSticker(1234, "sticker/path", { foo: "bar" });
MyTelegramBot.sendVideo(1234, "video/path", { foo: "bar" });
MyTelegramBot.sendVoice(1234, "voice/path", { foo: "bar" });
MyTelegramBot.sendChatAction(1234, "ACTION!");
MyTelegramBot.kickChatMember(1234, "myUserID");
MyTelegramBot.unbanChatMember(1234, "myUserID");
MyTelegramBot.answerCallbackQuery("myCallbackQueryID", "test-text", false, { foo: "bar" });
MyTelegramBot.editMessageText("test-text", { foo: "bar" });
MyTelegramBot.editMessageCaption("My Witty Caption", { foo: "bar" });
MyTelegramBot.editMessageReplyMarkup({ replyMarkup: "something" }, { foo: "bar" });
MyTelegramBot.getUserProfilePhotos("myUserID", { foo: "bar" });
MyTelegramBot.sendLocation(1234, 100, 200, { foo: "bar" });
MyTelegramBot.sendVenue(1234, 100, 200, "Venue Title", "123 Fake St.", { foo: "bar" });
MyTelegramBot.sendContact(1234, "345-555-0192", "John", { foo: "bar" });
MyTelegramBot.getFile("My/File/ID");
MyTelegramBot.getFileLink("My/File/ID");
MyTelegramBot.downloadFile("My/File/ID", "mydownloaddir/");
MyTelegramBot.onText(/regex/, (msg, match) => { });
MyTelegramBot.onReplyToMessage(1234, "mymessageID", (msg) => { });
MyTelegramBot.removeReplyListener(5466);
MyTelegramBot.getChat(1234);
MyTelegramBot.getChatAdministrators(1234);
MyTelegramBot.getChatMembersCount(1234);
MyTelegramBot.getChatMember(1234, "myUserID");
MyTelegramBot.leaveChat(1234);
MyTelegramBot.sendGame(1234, "MygameName", { foo: "bar" });
MyTelegramBot.setGameScore("myUserID", 99, { foo: "bar" });
MyTelegramBot.getGameHighScores("myUserID", { foo: "bar" });
